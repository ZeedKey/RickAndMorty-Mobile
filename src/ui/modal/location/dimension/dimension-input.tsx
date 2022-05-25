import {useFetchLocations, useLocationFilter} from '@hooks';
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
  const {form, setForm} = useLocationFilter();
  const {data, renderItem, pagination} = useFetchLocations({
    dimension: form.dimension,
  });

  const onInputChange = (dimension: string) => {
    setForm({...form, dimension: dimension});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Header>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.dimension} />
      </Header>

      <List
        columns={2}
        data={data?.locations.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </ModalMenu>
  );
};

const Header = styled.View`
  padding: 8.5px 19px;
  border-bottom-width: 0.5px;
  border-color: ${props => props.theme.colors.graybase.gray_5};
`;
