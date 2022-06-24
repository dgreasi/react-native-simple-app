import React, { useCallback, useMemo, useState } from 'react';
import theme from '~theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLatestPostsAsync,
  getPostsAsync,
  selectPosts,
  selectPostsLoading,
  selectPostsRefetching,
} from '~store/posts/postsSlice';
import { IPost } from '~interfaces/post.interface';
import styled from 'styled-components/native';
import { ActivityIndicator, RefreshControl } from 'react-native';
import PostCard from '~screens/Home/components/PostCard';

interface IRender {
  item: IPost;
  index: number;
}

const FooterLoadingView = styled.View`
  margin-top: ${theme.spacing.l}px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

const SeparatorView = styled.View`
  height: 16px;
`;

const FlatListStyled = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))``;

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [firstLoad, setFirstLoad] = useState(true);
  const postsLoading = useSelector(selectPostsLoading);
  const isRefetchingByUser = useSelector(selectPostsRefetching);

  const loadMore = () => {
    setFirstLoad(false);
    if (postsLoading) return;
    dispatch(getPostsAsync());
  };

  const refetchByUser = () => {
    dispatch(getLatestPostsAsync());
  };

  // const listHeader = () => {
  //   return (
  //     <View style={{ paddingBottom: theme.spacing.m }}>
  //       <Text>Posts</Text>
  //     </View>
  //   );
  // };

  const Separator = () => useMemo(() => <SeparatorView />, []);

  const renderFooter = () => {
    return (
      <FooterLoadingView>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </FooterLoadingView>
    );
  };

  const keyExtractor = useCallback((item: any) => item.id, []);

  const renderPosts = useCallback(
    ({ item, index }: IRender) => {
      return <PostCard post={item} index={index} firstLoad={firstLoad} />;
    },
    [firstLoad],
  );

  return (
    <FlatListStyled
      ListFooterComponent={postsLoading ? renderFooter : null}
      onEndReachedThreshold={0.5}
      onEndReached={loadMore}
      ItemSeparatorComponent={Separator}
      data={posts}
      renderItem={renderPosts}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} tintColor={theme.colors.primary} />
      }
      columnWrapperStyle={undefined}
    />
  );
};

export default PostsList;
