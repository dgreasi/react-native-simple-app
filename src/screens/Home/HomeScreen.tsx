import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageWithFallback } from '~components';
import theme from '~theme/theme';
import { Screen } from '~components/layout/Screen';
import { MAIN_ROUTES, MainRoutes } from '~navigation/Main/mainTypes';
import { StackNavigationProps } from '~navigation/navigation.interface';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }: StackNavigationProps<MainRoutes, 'Home'>) => {
  const navigatePost = () => {
    navigation.navigate(MAIN_ROUTES.POST);
  };

  const navigateProfile = () => {
    navigation.navigate(MAIN_ROUTES.PROFILE);
  };

  return (
    <Screen>
      <SafeAreaView style={styles.background}>
        <View>
          <ImageWithFallback
            styles={styles.img}
            source={{ uri: 'https://149645218.v2.pressablecdn.com/wp-content/uploads/2020/09/7.jpg' }}
          />
        </View>
        <TouchableOpacity onPress={navigatePost}>
          <Text>Navigate to Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateProfile}>
          <Text>Navigate to Profile</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.backgroundColor,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
});

export default HomeScreen;
