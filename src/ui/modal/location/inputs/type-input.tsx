import {useFetchLocations} from '@hooks';
import {LocationFormContext} from '@store';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';

import styled from 'styled-components/native';

interface ILocationModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const TypeModal: React.FC<ILocationModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(LocationFormContext);
  const {data, renderItem, pagination} = useFetchLocations({
    type: form.type,
  });

  const onInputChange = (type: string) => {
    setForm({...form, type: type});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Box>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.type} />

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
