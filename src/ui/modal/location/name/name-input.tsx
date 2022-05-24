import {useFetchLocations} from '@hooks';
import {LocationFormContext} from '@store';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';

import styled from 'styled-components/native';

interface IEpisodeModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const NameModal: React.FC<IEpisodeModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(LocationFormContext);
  const {data, renderItem, pagination} = useFetchLocations({
    name: form.name,
  });

  const onInputChange = (name: string) => {
    setForm({...form, name: name});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Box>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.name} />

        <List
          columns={2}
          data={data?.locations.results}
          renderItem={renderItem}
          handlePage={pagination}
        />
      </Box>
    </ModalMenu>
  );
};

const Box = styled.SafeAreaView``;
