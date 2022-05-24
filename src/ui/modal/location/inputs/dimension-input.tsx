import {useFetchLocations} from '@hooks';
import {LocationFormContext} from '@store';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';

import styled from 'styled-components/native';

interface IEpisodeModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const DimensionModal: React.FC<IEpisodeModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(LocationFormContext);
  const {data, renderItem, pagination} = useFetchLocations({
    dimension: form.dimension,
  });

  const onInputChange = (dimension: string) => {
    setForm({...form, dimension: dimension});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Box>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.dimension} />

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
