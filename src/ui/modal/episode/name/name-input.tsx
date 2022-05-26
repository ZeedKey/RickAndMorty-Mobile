import {useFetchEpisodes} from '@hooks';
import {EpisodeFormContext} from '@store';
import {List} from '@ui/common';
import {ModalLayout} from '@ui/layouts';
import React, {useContext} from 'react';

interface IEpisodeModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const EpisodeNameModal: React.FC<IEpisodeModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(EpisodeFormContext);
  const {data, renderItem, pagination} = useFetchEpisodes({
    name: form.name,
  });

  const onInputChange = (name: string) => {
    setForm({...form, name: name});
  };

  return (
    <ModalLayout
      title="Name"
      value={form.name}
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
