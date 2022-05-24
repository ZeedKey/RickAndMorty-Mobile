import {useFetchEpisodes} from '@hooks';
import {EpisodeContext, EpisodeFormContextProvider} from '@store';
import {List} from '@ui/common';
import {getAnyChoosed} from '@utils';
import React, {useContext, useState} from 'react';
import {MainLayout} from 'src/ui/layouts/MainLayout';
import {EpisodeFilter} from './modal';

export const EpisodeScreen = () => {
  const {filter} = useContext(EpisodeContext);
  const [isVisibile, setVisible] = useState<boolean>(false);

  const {data, renderItem, pagination} = useFetchEpisodes({
    name: filter.name,
    episode: filter.episode,
  });

  const onHeaderClick = () => setVisible(true);

  return (
    <EpisodeFormContextProvider>
      <MainLayout
        title="Episodes"
        callback={onHeaderClick}
        isFilterActive={getAnyChoosed(filter)}>
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
