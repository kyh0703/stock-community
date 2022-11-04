import styled from 'styled-components';
import { Post } from '../../features/posts/postsSlice';
import Responsive from '../common/Responsive';

interface PostListProps {
  posts: Post[] | null;
  loading: boolean;
  error?: string | null;
}

const PostList = ({ posts, loading, error }: PostListProps) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  if (!posts) {
    return null;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper></WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <li>{post.body}</li>
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

export default PostList;
