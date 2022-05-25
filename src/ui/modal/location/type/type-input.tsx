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
      <Header>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.type} />
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
