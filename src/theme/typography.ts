import styled from 'styled-components/native';

const UnstyledText = styled.Text`
  color: ${props => props.theme.colors.basic.black};
`;

export const Headline1 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s40}px;
  letter-spacing: ${props => props.theme.letterspacing.l41}px;
`;
export const Headline2 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s28}px;
  letter-spacing: ${props => props.theme.letterspacing.l34}px;
`;
export const Headline3 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s22}px;
  letter-spacing: ${props => props.theme.letterspacing.l35}px;
`;

export const Body1 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s20}px;
  letter-spacing: ${props => props.theme.letterspacing.l38}px;
`;
export const Body2 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s17}px;
  letter-spacing: ${props => props.theme.letterspacing.l38}px;
`;
export const Body3 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s15}px;
  letter-spacing: ${props => props.theme.letterspacing.l38}px;
`;

export const Caption1 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.s13}px;
  letter-spacing: ${props => props.theme.letterspacing.l8}px;
`;
export const Caption2 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.s11}px;
  letter-spacing: ${props => props.theme.letterspacing.l8}px;
`;

export const Tagline1 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s15}px;
  letter-spacing: ${props => props.theme.letterspacing.l24}px;
  text-transform: uppercase;
`;
export const Tagline2 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s13}px;
  letter-spacing: ${props => props.theme.letterspacing.l8}px;
  text-transform: uppercase;
`;
export const Tagline3 = styled(UnstyledText)`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s11}px;
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
  text-transform: uppercase;
`;
