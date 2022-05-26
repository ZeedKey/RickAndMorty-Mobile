import {useFetchEpisodes} from '@hooks';
import {EpisodeFormContext} from '@store';
import {List} from '@ui/common';
import {ModalLayout} from '@ui/layouts';
import React, {useContext} from 'react';

interface IEpisodeModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const EpisodeModal: React.FC<IEpisodeModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(EpisodeFormContext);
  const {data, renderItem, pagination} = useFetchEpisodes({
    episode: form.episode,
  });

  const onInputChange = (episode: string) => {
    setForm({...form, episode});
  };

  return (
    <ModalLayout
      title="Episode"
      value={form.episode}
      isShown={isShown}
      setShown={setShown}
      onInputChange={onInputChange}>
      <List
        columns={1}
        data={data?.episodes.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </ModalLayout>
  );
};
