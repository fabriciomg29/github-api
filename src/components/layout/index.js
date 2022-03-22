import React from 'react';
import useGithub from '../../hooks/github-hooks';
import Header from '../header';
import * as S from './styled';

const Layout = ({children}) => {

  return (
    <div>
      <S.WrapperLayout>
        <Header />
        {children}
      </S.WrapperLayout>
    </div>
  )
}

export default Layout;