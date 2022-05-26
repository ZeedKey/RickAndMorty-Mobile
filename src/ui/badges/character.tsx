import {Body2, Caption1} from '@theme';
import React from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import * as schema from 'src/schemas/generated';

import styled from 'styled-components/native';

export const Character: React.FC<schema.Character> = ({
  image,
  status,
  name,
  id,
}) => {
  const {navigate} = useNavigation();
  const pushToDetails = () =>
    navigate(Routes.CharacterStack, {
      screen: Routes.CharacterDetails,
      params: {id, name},
    });

  return (
    <Box onPress={pushToDetails}>
      <BadgeIcon source={{uri: image}} />
      <TextBox>
        <Status>{status}</Status>
        <Name numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Name>
      </TextBox>
    </Box>
  );
};

const Box = styled.Pressable`
  border-width: 0.5px;
  border-radius: 8px;
  margin-right: 17px;
  width: 167px;
  border-color: ${props => props.theme.colors.graybase.gray_4};
`;
const TextBox = styled.View`
  padding: 12px;
`;
const Status = styled(Caption1)`
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Name = styled(Body2)`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const BadgeIcon = styled.Image`
  height: 164px;
  width: 166px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
