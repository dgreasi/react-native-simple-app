import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProps } from '~navigation/navigation.interface';
import { MainRoutes } from '~navigation/Main/mainTypes';
import { Screen } from '~components/layout/Screen';

const ProfileScreen = ({ navigation, route }: StackNavigationProps<MainRoutes, 'Profile'>) => {
  return (
    <Screen>
      <View>
        <Text>Profile screen</Text>
      </View>
    </Screen>
  );
};

export default ProfileScreen;
