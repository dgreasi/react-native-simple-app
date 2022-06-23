import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MAIN_ROUTES } from '~navigation/Main/mainTypes';
import { HomeScreen, PostScreen, ProfileScreen } from '~screens';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name={MAIN_ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen
          name={MAIN_ROUTES.POST}
          component={PostScreen}
          options={({ route }) => ({
            headerShown: true,
            headerBackTitleVisible: false,
            // title: route?.params?.title,
            title: 'Post',
          })}
        />
        <Stack.Screen
          name={MAIN_ROUTES.PROFILE}
          component={ProfileScreen}
          options={({ route }) => ({
            headerShown: true,
            headerBackTitleVisible: false,
            // title: route?.params?.title,
            title: 'Profile',
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
