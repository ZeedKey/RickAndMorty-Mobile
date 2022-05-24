import {useFetchEpisodes} from '@hooks';
import {EpisodeContext, EpisodeFormContextProvider} from '@store';
import {List} from '@ui/common';
import React, {useContext, useState} from 'react';
import {MainLayout} from 'src/ui/layouts/MainLayout';
import {EpisodeFilter} from './modal';

export const EpisodeScreen = () => {
  const {filter} = useContext(EpisodeContext);

  const {data, renderItem, pagination} = useFetchEpisodes({
    name: filter.name,
    episode: filter.episode,
  });

  const [isVisibile, setVisible] = useState<boolean>(false);

  const isAnyTrue = !Object.values(filter).every(item => !!item === false);
  const onHeaderClick = () => setVisible(true);

  return (
    <EpisodeFormContextProvider>
      <MainLayout
        title="Episodes"
        callback={onHeaderClick}
        isFilterActive={isAnyTrue}>
        <List
          handlePage={pagination}
          columns={1}
          data={data?.episodes.results}
          renderItem={renderItem}
        />
        <EpisodeFilter isShown={isVisibile} setShown={setVisible} />
      </MainLayout>
    </EpisodeFormContextProvider>
  );
};
