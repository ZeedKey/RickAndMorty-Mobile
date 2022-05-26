import {useFetchCharacters} from '@hooks';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';
import {CharFormContext} from '@store';

import styled from 'styled-components/native';

interface ICharNameModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharNameModal: React.FC<ICharNameModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(CharFormContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    name: form.name,
  });

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
        data={data?.characters.results}
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
