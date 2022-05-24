import {useFetchEpisodes} from '@hooks';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';
import {EpisodeFormContext} from 'src/store/form/episode-form-store';

import styled from 'styled-components/native';

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
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Box>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.name} />

        <List
          columns={1}
          data={data?.episodes.results}
          renderItem={renderItem}
          handlePage={pagination}
        />
      </Box>
    </ModalMenu>
  );
};

const Box = styled.SafeAreaView``;
