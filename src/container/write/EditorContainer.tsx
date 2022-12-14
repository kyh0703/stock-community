import Editor from '../../components/write/Editor';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useCallback } from 'react';
import { postsAction, InputPayload } from '../../features/posts/postSlice';

const EditorContainer = () => {
  const dispatch = useAppDispatch();
  const { title, body, tags } = useAppSelector(({ posts }) => ({
    title: posts.write.title,
    body: posts.write.body,
    tags: posts.write.tags,
  }));

  const onChangeField = useCallback(
    (payload: InputPayload) => dispatch(postsAction.changeWriteField(payload)),
    [dispatch],
  );

  // unmount 될 때 초기화
  useEffect(() => {
    // return () => {
    //   dispatch(postsAction.initWriteFiled());
    // };
  }, [dispatch]);

  return <Editor title={title} body={body} onChangeField={onChangeField} />;
};

export default EditorContainer;
