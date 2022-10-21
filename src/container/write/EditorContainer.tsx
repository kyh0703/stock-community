import Editor from '../../components/write/Editor';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useCallback } from 'react';
import { postsAction, InputPayload } from '../../features/posts/PostsSlice';

const EditorContainer = () => {
  const dispatch = useAppDispatch();
  const { title, body } = useAppSelector(({ posts }) => ({
    title: posts.write.title,
    body: posts.write.body,
  }));

  const onChangeField = useCallback(
    (payload: InputPayload) => dispatch(postsAction.changeWriteField(payload)),
    [dispatch],
  );
  // unmount 될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(postsAction.initWriteFiled());
    };
  }, [dispatch]);

  return <Editor title={title} body={body} onChangeField={onChangeField} />;
};

export default EditorContainer;
