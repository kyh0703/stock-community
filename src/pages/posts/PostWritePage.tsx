import React from 'react';
import Responsive from '../../components/common/Responsive';
import HeaderContainer from '../../container/common/HeaderContainer';
import EditorContainer from '../../container/write/EditorContainer';
import WriteActionButtonContainer from '../../container/write/WriteActionButtonContainer';

const PostWritePage = () => {
  return (
    <Responsive>
      <HeaderContainer />
      <EditorContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
};

export default PostWritePage;
