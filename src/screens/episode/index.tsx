import {useFetchEpisodes} from '@hooks';
import {List} from '@ui/common';
import React from 'react';
import {MainLayout} from 'src/ui/layouts/MainLayout';

export const EpisodeScreen = () => {
  const {data, renderItem, pagination} = useFetchEpisodes({});

  return (
    <MainLayout>
      <List
        handlePage={pagination}
        columns={1}
        data={data?.episodes.results}
        renderItem={renderItem}
      />
    </MainLayout>
  );
};
