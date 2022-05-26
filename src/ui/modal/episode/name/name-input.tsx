import {useFetchEpisodes} from '@hooks';
import {EpisodeFormContext} from '@store';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';
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
      <Header>
        <BackButton onPress={() => setShown(false)} />
        <Input onChange={onInputChange} value={form.name} />
      </Header>
      <List
        columns={1}
        data={data?.episodes.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </ModalMenu>
  );
};

const Header = styled.View`
  border-bottom-width: 0.5px;
  border-color: ${props => props.theme.colors.graybase.gray_5};
`;
