import {useFetchLocations} from '@hooks';
import {LocationFormContext} from '@store';
import {List} from '@ui/common';
import {ModalLayout} from '@ui/layouts';
import React, {useContext} from 'react';

interface IEpisodeModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const DimensionModal: React.FC<IEpisodeModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(LocationFormContext);
  const {data, renderItem, pagination} = useFetchLocations({
    dimension: form.dimension,
  });

  const onInputChange = (dimension: string) => {
    setForm({...form, dimension: dimension});
  };

  return (
    <ModalLayout
      title="Dimension"
      value={form.dimension}
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
