import { Link } from 'react-router-dom';

import { PostItem } from '@/app/posts/types';

import { PostItemContainer } from './post-item.styles';

interface PostItemProps {
  post: PostItem;
}

const PostItem = ({ post }: PostItemProps) => {
  const { id, title, body, username } = post;
  return (
    <PostItemContainer>
      <h2>
        <Link to={`@${username}/${id}`}>{title}</Link>
      </h2>
      <p>{body}</p>
    </PostItemContainer>
  );
};

export default PostItem;
