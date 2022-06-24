import React from 'react';
import { IAuthor } from '~interfaces/author.interface';
import { ImageWithFallback } from '~components';
import { Text, TouchableOpacity } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MAIN_ROUTES } from '~navigation/Main/mainTypes';
import theme from '~theme/theme';
import { IMAGE_IN_LIST } from '~config/constants';
import styled from 'styled-components/native';

interface Props {
  author: IAuthor;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ImageWithFallbackStyled = styled(ImageWithFallback).attrs(() => ({
  styles: {
    width: IMAGE_IN_LIST,
    height: IMAGE_IN_LIST,
    borderRadius: theme.borderRadii.ml,
  },
}))``;

const TouchableAuthorName = styled.TouchableOpacity`
  padding: ${theme.spacing.m}px;
`;

const PostCardAuthor = ({ author }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onPress = () => {
    navigation.navigate(MAIN_ROUTES.PROFILE);
  };

  return (
    <Container>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <ImageWithFallbackStyled source={{ uri: author.img }} />
      </TouchableOpacity>
      <TouchableAuthorName onPress={onPress} activeOpacity={0.5}>
        <Text>{author.name}</Text>
      </TouchableAuthorName>
    </Container>
  );
};

export default PostCardAuthor;
