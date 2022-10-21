import React from 'react';
import Responsive from '../../components/common/Responsive';
import HeaderContainer from '../../container/common/HeaderContainer';
import EditorContainer from '../../container/write/EditorContainer';

const PostWritePage = () => {
  return (
    <Responsive>
      <HeaderContainer />
      <EditorContainer />
    </Responsive>
  );
};

export default PostWritePage;
