import {useFetchCharacters} from '@hooks';
import {CharFormContext} from '@store';
import {List} from '@ui/common';
import {ModalLayout} from '@ui/layouts';
import React, {useContext} from 'react';

interface ISpeciesModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const SpeciesModal: React.FC<ISpeciesModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(CharFormContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    species: form.species,
  });

  const onInputChange = (species: string) => {
    setForm({...form, species: species});
  };

  return (
    <ModalLayout
      title="Species"
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