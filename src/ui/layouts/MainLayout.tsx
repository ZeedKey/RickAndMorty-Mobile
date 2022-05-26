import React from 'react';
import {Header} from '@ui/common';
import {SafeAreaView} from 'react-native-safe-area-context';
import {padEnd} from 'lodash';
import {isIos} from 'src/config';

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
  const iosHeight = isIos ? {height: '17%'} : {};
  return (
    <>
      <SafeAreaView style={{padding: 0, margin: 0, ...iosHeight}}>
        <Header
          title={title}
          callback={callback}
          isFilterActive={isFilterActive}
        />
      </SafeAreaView>
      {children}
    </>
  );
};
