import React, { useEffect } from 'react';
import theme from '~theme/theme';
import { Screen } from '~components/layout/Screen';
import { useDispatch } from 'react-redux';
import { getPostsAsync } from '~store/posts/postsSlice';
import PostsList from '~screens/Home/components/PostsList';
import styled from 'styled-components/native';
import { isIOS } from '~utils/deviceInfo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const StyledSafeAreaView = styled.SafeAreaView`
    background-color: ${theme.colors.background};
    padding-top: ${isIOS ? 0 : `${insets?.top}px` || 0};
    //margin-bottom: 50px;
  `;

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
