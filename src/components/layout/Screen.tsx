import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import theme from '~theme/theme';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
  full?: boolean;
  testID?: string;
  paddingTop?: boolean;
  barStyle?: StatusBarStyle;
};

const ViewStyled = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: ${theme.colors.background};
  ${(props: any) =>
    !props.full &&
    `
    padding-horizontal: 16px;
  `}
  ${(props: any) =>
    props.paddingTop &&
    `
    padding-top: 24px;
  `}
`;

export const Screen = ({ children, full, testID, paddingTop, barStyle }: Props) => (
  <ViewStyled testID={testID} full={full} paddingTop={paddingTop}>
    <StatusBar translucent backgroundColor="transparent" barStyle={barStyle || 'dark-content'} />
    {children}
  </ViewStyled>
);
