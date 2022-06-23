import React from 'react';
import { StatusBar, StatusBarStyle, StyleSheet, View } from 'react-native';
import theme from '~theme/theme';

type Props = {
  children: React.ReactNode;
  full?: boolean;
  testID?: string;
  paddingTop?: boolean;
  barStyle?: StatusBarStyle;
};

export const Screen = ({ children, full, testID, paddingTop, barStyle }: Props) => (
  <View
    testID={testID}
    style={[
      styles.container,
      full ? undefined : { paddingHorizontal: 16 },
      paddingTop ? { paddingTop: 24 } : undefined,
    ]}>
    <StatusBar translucent backgroundColor="transparent" barStyle={barStyle || 'dark-content'} />
    {children}
  </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.backgroundColor,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});
