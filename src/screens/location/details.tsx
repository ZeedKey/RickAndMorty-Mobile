import {List} from '@ui/common';
import {TitleLayout} from '@ui/layouts';
import React from 'react';
import {View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  Location,
  Character as Model,
  useGetLocationByIdQuery,
} from 'src/schemas/generated';
import {Character} from '@ui/badges';
import {LocationHeader} from '@ui/details';

export const LocationDetails: React.FC = () => {
  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();

  const {data} = useGetLocationByIdQuery({
    variables: {id: route.params.id},
  });

  const renderItem = ({item}: {item: Model}) => <Character {...item} />;
  return (
    <TitleLayout title={data?.location?.name}>
      <View>
        <List
          header={() => <LocationHeader data={data} />}
          data={data?.location.residents}
          renderItem={renderItem}
          columns={2}
        />
      </View>
    </TitleLayout>
  );
};
