import {useFetchCharacters} from '@hooks';
import {List} from '@ui/common';
import React, {useContext} from 'react';
import {CharFormContext} from '@store';
import {ModalLayout} from '@ui/layouts';

interface ICharNameModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharNameModal: React.FC<ICharNameModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(CharFormContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    name: form.name,
  });

  const onInputChange = (name: string) => {
    setForm({...form, name});
  };

  return (
    <ModalLayout
      title="Name"
      value={form.name}
      isShown={isShown}
      setShown={setShown}
      onInputChange={onInputChange}>
      <List
        data={data?.characters.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </ModalLayout>
  );
};
