import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProps } from '~navigation/navigation.interface';
import { MainRoutes } from '~navigation/Main/mainTypes';
import { Screen } from '~components/layout/Screen';

const PostScreen = ({ navigation, route }: StackNavigationProps<MainRoutes, 'Post'>) => {
  return (
    <Screen>
      <View>
        <Text>Post Screen</Text>
      </View>
    </Screen>
  );
};

export default PostScreen;
