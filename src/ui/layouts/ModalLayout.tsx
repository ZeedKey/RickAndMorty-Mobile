import styled from 'styled-components/native';
import {ClearButton, ApplyButton} from '@ui/common';
import React from 'react';

interface IModalLayoutProps {
  onClearPress: () => void;
  onApplyPress: () => void;
}

export const ModalLayout: React.FC<IModalLayoutProps> = ({
  onApplyPress,
  onClearPress,
  children,
}) => {
  return (
    <>
      <Header>
        <ClearButton onPress={onClearPress} />
        <ApplyButton onPress={onApplyPress} />
      </Header>
      {children}
    </>
  );
};

const Header = styled.View``;
