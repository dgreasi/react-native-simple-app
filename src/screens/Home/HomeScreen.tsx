import React, { useEffect } from 'react';
import theme from '~theme/theme';
import { Screen } from '~components/layout/Screen';
import { useDispatch } from 'react-redux';
import { getPostsAsync } from '~store/posts/postsSlice';
import PostsList from '~screens/Home/components/PostsList';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${theme.colors.background};
`;

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <Screen full>
      <StyledSafeAreaView>
        <PostsList />
      </StyledSafeAreaView>
    </Screen>
  );
};

export default HomeScreen;
