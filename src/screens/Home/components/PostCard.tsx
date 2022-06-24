import React, { memo } from 'react';
import { IPost } from '~interfaces/post.interface';
import { CARD_WIDTH_FULL } from '~config/constants';
import theme from '~theme/theme';
import Animated, { FadeIn, Layout } from 'react-native-reanimated';
import { MAIN_ROUTES } from '~navigation/Main/mainTypes';
import PostCardAuthor from '~screens/Home/components/PostCardAuthor';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PostCardBody from '~screens/Home/components/PostCardBody';
import styled from 'styled-components/native';

interface Props {
  post: IPost;
  index: number;
  firstLoad: boolean;
}

const TouchableOpacityStyled = styled.TouchableOpacity`
  width: ${CARD_WIDTH_FULL}px;
  border-radius: ${theme.borderRadii.ml}px;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.sm}px;
`;

const PostCardBodyContainer = styled.View`
  margin-top: ${theme.spacing.s}px;
`;

const PostCard = ({ post, index, firstLoad }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onPressCard = () => {
    navigation.navigate(MAIN_ROUTES.POST);
  };

  return (
    <TouchableOpacityStyled onPress={onPressCard} activeOpacity={0.5}>
      <Animated.View entering={firstLoad ? FadeIn.delay(100 * index) : undefined} layout={Layout}>
        <PostCardAuthor author={post.author} />
        <PostCardBodyContainer>
          <PostCardBody body={post.body} />
        </PostCardBodyContainer>
      </Animated.View>
    </TouchableOpacityStyled>
  );
};

export default memo(PostCard);
