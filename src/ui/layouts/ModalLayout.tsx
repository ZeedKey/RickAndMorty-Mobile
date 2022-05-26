import React from 'react';
import {BackButton, Input, ModalMenu} from '@ui/common';
import styled from 'styled-components/native';
import {Body3} from '@theme';

interface IModalInput {
  title?: string;
  isShown: boolean;
  onInputChange: (text: string) => void;
  setShown: (val: boolean) => void;
  value?: string;
}

export const ModalLayout: React.FC<IModalInput> = ({
  setShown,
  isShown,
  onInputChange,
  value,
  title,
  children,
}) => {
  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Header>
        <Row>
          <BackButton onPress={() => setShown(false)} />
          <Title>{title}</Title>
          <Block />
        </Row>
        <Input onChange={onInputChange} value={value} />
      </Header>
      {children}
    </ModalMenu>
  );
};

const Header = styled.View`
  border-bottom-width: 0.5px;
  border-color: ${props => props.theme.colors.graybase.gray_5};
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled(Body3)`
  flex: 1;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: ${props => props.theme.letterspacing.l24}px;
`;
const Block = styled.View`
  width: 85px;
`;
