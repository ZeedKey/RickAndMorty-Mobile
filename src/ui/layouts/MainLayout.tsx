import React from 'react';
import {Header} from '@ui/common';
import styled from 'styled-components/native';
import {basic} from '@theme';

const Box = styled.SafeAreaView`
  height: 100%;
  background-color: ${basic.light_gray};
`;

interface IMainLayoutProps {
  title: string;
  callback: () => void;
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  callback,
  children,
  title,
}) => {
  return (
    <Box>
      <Header title={title} callback={callback} />
      {children}
    </Box>
  );
};
