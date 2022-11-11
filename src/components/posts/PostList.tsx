import styled from 'styled-components';
import { Post } from '../../features/posts/postSlice';
import Responsive from '../common/Responsive';
import PostItem from './PostItem';

interface Props {
  posts: Post[] | null;
  loading: boolean;
  error?: string | null;
}

const PostList = ({ posts, loading, error }: Props) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper></WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post.id} />
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
