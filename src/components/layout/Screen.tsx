import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import theme from '~theme/theme';
import styled from 'styled-components/native';
import { isAndroid } from '~utils/deviceInfo';
import { useHeaderHeight } from '@react-navigation/elements';

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
    padding-top: ${props.paddingTop}px;
  `}
`;

interface Props {
  children: React.ReactNode;
  full?: boolean;
  testID?: string;
  paddingTop?: number;
  barStyle?: StatusBarStyle;
}

export const Screen = ({ children, full, testID, paddingTop, barStyle }: Props) => {
  // Bug of react-navigation 6 and reanimated
  // Issue: https://github.com/software-mansion/react-native-reanimated/issues/2906
  const headerHeight = useHeaderHeight();
  const fixAndroidPaddingTop = isAndroid ? headerHeight : 0;

  return (
    <ViewStyled testID={testID} full={full} paddingTop={fixAndroidPaddingTop || paddingTop}>
      <StatusBar translucent backgroundColor="transparent" barStyle={barStyle || 'dark-content'} />
      {children}
    </ViewStyled>
  );
};
