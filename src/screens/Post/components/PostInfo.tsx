import React from 'react';
import { View } from 'react-native';
import { IPost } from '~interfaces/post.interface';
import { AuthorNameText, RowContainerCenter, TextStyled } from '~theme/shared';

interface Props {
  post: IPost;
}

const PostInfo = ({ post }: Props) => {
  return (
    <View>
      <RowContainerCenter>
        <AuthorNameText>{post?.author?.name}</AuthorNameText>
        <TextStyled>' post</TextStyled>
      </RowContainerCenter>
      <View>
        <TextStyled>{post?.body}</TextStyled>
      </View>
    </View>
  );
};

export default PostInfo;
