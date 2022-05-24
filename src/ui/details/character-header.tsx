import {DetailOption} from '@ui/common';
import React from 'react';
import {
  Character,
  GetCharactersByIdQuery,
  useGetCharactersByIdQuery,
} from 'src/schemas/generated';
import styled from 'styled-components/native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {basic, font, lt_space, sizes} from '@theme';

interface IHeaderProps {
  data: GetCharactersByIdQuery | undefined;
}

export const CharacterHeader: React.FC<IHeaderProps> = () => {
  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();

  const {data} = useGetCharactersByIdQuery({
    variables: {id: route.params.id},
  });

  return (
    <Box>
      <Head>
        <Icon source={{uri: data?.character.image}} />
        <Status>{data?.character.status}</Status>
        <Name>{data?.character.name}</Name>
        <Species>{data?.character.species}</Species>
      </Head>
      <Title>Informations</Title>
      <Tail>
        <DetailOption title="Gender" body={data?.character.gender} />
        <DetailOption title="Origin" body={data?.character.origin?.name} />
        <DetailOption title="Type" body={data?.character.type || 'unknown'} />
        <DetailOption title="Location" body={data?.character.location?.name} />
      </Tail>
      <Title>Episodes</Title>
    </Box>
  );
};

const Icon = styled.Image`
  border-radius: 150px;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border: 5px solid ${basic.white};
`;
const Box = styled.View`
  margin-bottom: -25px;
`;
const Head = styled.View`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${basic.light_gray};
`;
const Status = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s13}px;
  letter-spacing: ${lt_space.l7}px;
  color: ${basic.additional_text};
`;
const Name = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s28}px;
  letter-spacing: ${lt_space.l34}px;
  line-height: 41px;
`;
const Species = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s13}px;
  letter-spacing: ${lt_space.l8}px;
  color: ${basic.additional_text};
  text-transform: uppercase;
`;
const Title = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s22}px;
  letter-spacing: ${lt_space.l34}px;
  line-height: 41px;
  color: ${basic.additional_text};
  margin-left: 19px;
`;
const Tail = styled.View`
  background-color: ${basic.white};
  margin-left: 19px;
`;
