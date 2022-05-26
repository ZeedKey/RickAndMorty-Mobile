import {useFetchLocations} from '@hooks';
import {LocationFormContext} from '@store';
import {List} from '@ui/common';
import {ModalLayout} from '@ui/layouts';
import React, {useContext} from 'react';

interface IEpisodeModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const NameModal: React.FC<IEpisodeModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(LocationFormContext);
  const {data, renderItem, pagination} = useFetchLocations({name: form.name});

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
        columns={2}
        data={data?.locations.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </ModalLayout>
  );
};
