import React from 'react';
import {Header} from '@ui/common';
import {SafeAreaView} from 'react-native-safe-area-context';
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
    <SafeAreaView>
      <Header
        title={title}
        callback={callback}
        isFilterActive={isFilterActive}
      />
      {children}
    </SafeAreaView>
  );
};
