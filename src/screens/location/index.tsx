import React, {useContext, useState} from 'react';
import {MainLayout} from 'src/ui/layouts/MainLayout';
import {List} from '@ui/common';
import {useFetchLocations} from '@hooks';
import {LocationContext, LocationFormContextProvider} from '@store';
import {LocationFilter} from './modal';
import {getAnyChoosed} from '@utils';

export const LocationScreen = () => {
  const {filter} = useContext(LocationContext);
  const [isVisible, setVisible] = useState<boolean>(false);

  const {data, pagination, renderItem} = useFetchLocations({
    dimension: filter.dimension,
    name: filter.name,
    type: filter.type,
  });

  const onHeaderClick = () => setVisible(true);

  return (
    <LocationFormContextProvider>
      <MainLayout
        title="Locations"
        callback={onHeaderClick}
        isFilterActive={getAnyChoosed(filter)}>
        <List
          data={data?.locations.results}
          renderItem={renderItem}
          handlePage={pagination}
        />
      </MainLayout>
      <LocationFilter isShown={isVisible} setShown={setVisible} />
    </LocationFormContextProvider>
  );
};
