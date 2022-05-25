import React from 'react';
import {
  Character as Model,
  Episode,
  useGetEpisodeByIdQuery,
} from 'src/schemas/generated';
import {List} from '@ui/common';
import {RouteProp, useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import {TitleLayout} from '@ui/layouts';
import {Character} from '@ui/badges';
import {EpisodeHeader} from '@ui/details';

export const EpisodeDetails: React.FC = () => {
  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();

  const {data} = useGetEpisodeByIdQuery({
    variables: {id: route.params.id},
  });

  const renderItem = ({item}: {item: Model}) => {
    return <Character {...item} />;
  };

  return (
    <TitleLayout title={data?.episode.name}>
      <View>
        <List
          data={data?.episode.characters}
          renderItem={renderItem}
          header={() => <EpisodeHeader data={data} />}
          columns={2}
        />
      </View>
    </TitleLayout>
  );
};
