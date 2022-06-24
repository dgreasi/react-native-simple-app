import React from 'react';
import { StackNavigationProps } from '~navigation/navigation.interface';
import { MainRoutes } from '~navigation/Main/mainTypes';
import styled from 'styled-components/native';
import theme from '~theme/theme';
import { ImageWithFallback } from '~components';
import { PROFILE_IMAGE } from '~config/constants';
import PostInfo from '~screens/Post/components/PostInfo';
import { Screen } from '~components/layout/Screen';
import { ScrollViewContainer } from '~theme/shared';

const ImageWithFallbackStyled = styled(ImageWithFallback).attrs(() => ({
  styles: {
    width: PROFILE_IMAGE,
    height: PROFILE_IMAGE,
    borderRadius: theme.borderRadii.ml,
  },
}))``;

const AuthorInfoContainer = styled.View`
  margin-top: ${theme.spacing.m}px;
  justify-content: center;
  align-items: center;
`;

const PostScreen = ({ route }: StackNavigationProps<MainRoutes, 'Post'>) => {
  const post = route.params.post;

  return (
    <Screen>
      <ScrollViewContainer showsVerticalScrollIndicator={false} contentInset={{ bottom: 40 }}>
        <AuthorInfoContainer>
          <ImageWithFallbackStyled source={{ uri: post.author.img }} />
        </AuthorInfoContainer>
        <AuthorInfoContainer>
          <PostInfo post={post} />
        </AuthorInfoContainer>
      </ScrollViewContainer>
    </Screen>
  );
};

export default PostScreen;
