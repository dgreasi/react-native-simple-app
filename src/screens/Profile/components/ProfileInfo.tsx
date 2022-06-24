import React from 'react';
import { IAuthor } from '~interfaces/author.interface';
import { View } from 'react-native';
import { AuthorNameText, RowContainerCenter, TextStyled } from '~theme/shared';

interface Props {
  author: IAuthor;
}

const ProfileInfo = ({ author }: Props) => {
  return (
    <View>
      <RowContainerCenter>
        <TextStyled>About:</TextStyled>
        <AuthorNameText> {author?.name}</AuthorNameText>
      </RowContainerCenter>
      <View>
        <TextStyled>{author?.description}</TextStyled>
      </View>
    </View>
  );
};

export default ProfileInfo;
