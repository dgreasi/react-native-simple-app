import React from 'react';
import { Text } from 'react-native';
import { IMAGE_IN_LIST } from '~config/constants';
import styled from 'styled-components/native';

interface Props {
  body: string;
}

const Container = styled.View`
  padding-left: ${IMAGE_IN_LIST}px;
`;

const PostCardBody = ({ body }: Props) => {
  return (
    <Container>
      <Text numberOfLines={3}>{body}</Text>
    </Container>
  );
};

export default PostCardBody;
