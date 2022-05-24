import React from 'react';
import {Header} from '@ui/common';
import styled from 'styled-components/native';

interface IMainLayoutProps {
  title: string;
  callback: () => void;
  children: React.ReactNode;
  isFilterActive: boolean;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  callback,
  children,
  title,
  isFilterActive,
}) => {
  return (
    <Box>
      <Header
        title={title}
        callback={callback}
        isFilterActive={isFilterActive}
      />
      {children}
    </Box>
  );
};

const Box = styled.SafeAreaView`
  height: 100%;
`;
