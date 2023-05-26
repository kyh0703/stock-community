import { Post } from '@features/posts/postSlice';

import Spinner from '../common/Spinner';
import PostItem from './PostItem';

import { PostListContainer, WritePostButtonWrapper } from './post-list.styles';

interface PostListProps {
  posts: Post[] | null;
  loading: boolean;
  error?: string | null;
}

const PostList = ({ posts, loading, error }: PostListProps) => {
  if (error) {
    return <PostListContainer>에러가 발생했습니다.{error}</PostListContainer>;
  }

  if (loading) {
    return (
      <PostListContainer>
        <Spinner message="loading..." />
      </PostListContainer>
    );
  }

  return (
    <PostListContainer>
      <WritePostButtonWrapper></WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      )}
    </PostListContainer>
  );
};

export default PostList;
