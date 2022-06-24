import React from 'react';
import { IMAGE_IN_LIST } from '~config/constants';
import styled from 'styled-components/native';
import { TextStyled } from '~theme/shared';

interface Props {
  body: string;
}

const Container = styled.View`
  padding-left: ${IMAGE_IN_LIST}px;
`;

const PostCardBody = ({ body }: Props) => {
  return (
    <Container>
      <TextStyled numberOfLines={3}>{body}</TextStyled>
    </Container>
  );
};

export default PostCardBody;
