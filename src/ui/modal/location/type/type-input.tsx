import {useFetchLocations} from '@hooks';
import {LocationFormContext} from '@store';
import {List} from '@ui/common';
import React, {useContext} from 'react';
import {ModalLayout} from '@ui/layouts';

interface ILocationModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const TypeModal: React.FC<ILocationModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(LocationFormContext);
  const {data, renderItem, pagination} = useFetchLocations({
    type: form.type,
  });

  const onInputChange = (type: string) => {
    setForm({...form, type: type});
  };

  return (
    <ModalLayout
      title="Type"
      value={form.type}
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
