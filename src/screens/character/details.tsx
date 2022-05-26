import {List} from '@ui/common';
import React from 'react';
import {
  Episode as Model,
  useGetCharactersByIdQuery,
} from 'src/schemas/generated';
import {Episode} from '@ui/badges';
import {RouteProp, useRoute} from '@react-navigation/native';
import {TitleLayout} from '@ui/layouts';
import {CharacterHeader} from '@ui/details';

export const CharacterDetails: React.FC = () => {
  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();
  const {data} = useGetCharactersByIdQuery({
    variables: {id: route.params.id},
  });

  const renderItem = ({item}: {item: Model}) => <Episode {...item} />;

  return (
    <TitleLayout title={data?.character.name}>
      <List
        data={data?.character.episode}
        renderItem={renderItem}
        columns={1}
        header={() => <CharacterHeader data={data} />}
      />
    </TitleLayout>
  );
};
