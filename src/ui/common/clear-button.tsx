import {accent} from '@theme';
import styled from 'styled-components/native';

export const ClearButton = () => {
  return (
    <Button>
      <Label>Clear</Label>
    </Button>
  );
};

const Button = styled.TouchableOpacity``;
const Label = styled.Text`
  color: ${accent.indigo};
`;
