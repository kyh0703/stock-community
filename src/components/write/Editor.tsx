import { useMemo, useRef } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import ReactQuill from 'react-quill';
import { InputPayload } from '../../features/posts/postSlice';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  title: string;
  body: string;
  onChangeField: (payload: InputPayload) => void;
}

const Editor = ({ title, body, onChangeField }: EditorProps) => {
  // quill 인스턴스를 설정
  const QuillRef = useRef<ReactQuill>(null);

  // quill 에서 사용할 모듈을 정의
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler로 인하여 focus가 풀림
  // https://quilljs.com/docs/modules/toolbar/ 참고
  const modules = useMemo(
    () => ({
      toolbar: {
        // container에 등록되는 순서대로 tool 배치
        container: [
          ['link', 'image', 'video'],
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
      },
    }),
    [],
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  // Handle change title
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <ReactQuill
        ref={QuillRef}
        style={{ height: '320px' }}
        theme="snow"
        placeholder="내용을 작성하세요..."
        modules={modules}
        formats={formats}
        value={body}
        onChange={(value, delta, source, editor) => {
          onChangeField({ key: 'body', value: editor.getHTML() });
        }}
      />
    </EditorBlock>
  );
};

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  background: inherit;
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.bodyColor};
  margin-bottom: 2rem;
  width: 100%;
`;

// const CustomReactQuill = styled(ReactQuill)`
//   height: 300px;
// `;

export default Editor;
