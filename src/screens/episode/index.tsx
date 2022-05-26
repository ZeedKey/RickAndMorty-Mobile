import {useFetchEpisodes, useModal} from '@hooks';
import {
  EpisodeContext,
  EpisodeFormContextProvider as FormContext,
} from '@store';
import {List} from '@ui/common';
import {getAnyChoosed} from '@utils';
import React, {useContext} from 'react';
import {MainLayout} from 'src/ui/layouts/MainLayout';
import {EpisodeFilterModal as Modal} from './modal';

export const EpisodeScreen = () => {
  const {filter} = useContext(EpisodeContext);
  const {isShown, setShown} = useModal();

  const {data, renderItem, pagination} = useFetchEpisodes({
    name: filter.name,
    episode: filter.episode,
  });

  const onHeaderClick = () => setShown(true);

  return (
    <FormContext>
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
        <Modal isShown={isShown} setShown={setShown} />
      </MainLayout>
    </FormContext>
  );
};
