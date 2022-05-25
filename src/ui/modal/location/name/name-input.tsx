import {useFetchLocations, useLocationFilter} from '@hooks';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React from 'react';

import styled from 'styled-components/native';

interface IEpisodeModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const NameModal: React.FC<IEpisodeModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useLocationFilter();
  const {data, renderItem, pagination} = useFetchLocations({name: form.name});

  const onInputChange = (name: string) => {
    setForm({...form, name: name});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Header>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.name} />
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
