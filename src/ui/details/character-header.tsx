import {DetailOption} from '@ui/common';
import React from 'react';
import {GetCharactersByIdQuery} from 'src/schemas/generated';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {Body1, Caption1, Headline2, Tagline2} from '@theme';

interface IHeaderProps {
  data: GetCharactersByIdQuery | undefined;
}

export const CharacterHeader: React.FC<IHeaderProps> = ({data}) => {
  return (
    <View>
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
    </View>
  );
};

const Icon = styled.Image`
  border-radius: 150px;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border: 5px solid ${props => props.theme.colors.basic.white};
`;
const Head = styled.View`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.basic.light_gray};
`;
const Name = styled(Headline2)`
  text-align: center;
`;
const Status = styled(Caption1)`
  letter-spacing: ${props => props.theme.letterspacing.l8}px;
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Species = styled(Tagline2)`
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Title = styled(Body1)`
  margin-top: 20px;
  color: ${props => props.theme.colors.basic.additional_text};
  margin-left: 19px;
`;
const Tail = styled.View`
  background-color: ${props => props.theme.colors.basic.white};
  margin-left: 19px;
  margin-bottom: 20px;
  margin-top: 10px;
`;
