import React from 'react';
import {MainLayout} from 'src/ui/layouts/MainLayout';
import {List} from '@ui/common';
import {useFetchLocations} from '@hooks';

export const LocationScreen = () => {
  const {data, pagination, renderItem} = useFetchLocations();

  return (
    <MainLayout title='Locations'>
      <List
        data={data?.locations.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </MainLayout>
  );
};
