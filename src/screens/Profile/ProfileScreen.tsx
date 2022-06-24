import React from 'react';
import { StackNavigationProps } from '~navigation/navigation.interface';
import { MainRoutes } from '~navigation/Main/mainTypes';
import { Screen } from '~components/layout/Screen';
import styled from 'styled-components/native';
import { ImageWithFallback } from '~components';
import { PROFILE_IMAGE } from '~config/constants';
import theme from '~theme/theme';
import ProfileInfo from '~screens/Profile/components/ProfileInfo';
import { ScrollViewContainer } from '~theme/shared';

const ImageWithFallbackStyled = styled(ImageWithFallback).attrs(() => ({
  styles: {
    width: PROFILE_IMAGE,
    height: PROFILE_IMAGE,
    borderRadius: theme.borderRadii.xxl,
  },
}))``;

const AuthorInfoContainer = styled.View`
  margin-top: ${theme.spacing.m}px;
  justify-content: center;
  align-items: center;
`;

const ProfileScreen = ({ route }: StackNavigationProps<MainRoutes, 'Profile'>) => {
  const author = route.params.author;

  return (
    <Screen>
      <ScrollViewContainer showsVerticalScrollIndicator={false} contentInset={{ bottom: 40 }}>
        <AuthorInfoContainer>
          <ImageWithFallbackStyled source={{ uri: author.img }} />
        </AuthorInfoContainer>
        <AuthorInfoContainer>
          <ProfileInfo author={author} />
        </AuthorInfoContainer>
      </ScrollViewContainer>
    </Screen>
  );
};

export default ProfileScreen;
