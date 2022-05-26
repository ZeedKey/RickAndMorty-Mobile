import React, {useContext} from 'react';
import {MainLayout} from 'src/ui/layouts/MainLayout';
import {List} from '@ui/common';
import {useFetchLocations, useModal} from '@hooks';
import {
  LocationContext,
  LocationFormContextProvider as FormContext,
} from '@store';
import {LocationFilterModal as Modal} from './modal';
import {getAnyChoosed} from '@utils';

export const LocationScreen = () => {
  const {filter} = useContext(LocationContext);
  const {isShown, setShown} = useModal();

  const {data, pagination, renderItem} = useFetchLocations({
    dimension: filter.dimension,
    name: filter.name,
    type: filter.type,
  });

  const onHeaderClick = () => setShown(true);

  return (
    <FormContext>
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
      <Modal isShown={isShown} setShown={setShown} />
    </FormContext>
  );
};
