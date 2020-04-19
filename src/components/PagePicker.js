import React, { useContext } from 'react';
import Home from './Home';
import TopSongs from './TopSongs';
import NotAuthenticated from './NotAuthenticated';
import { AuthContext } from '../contexts/AuthContextProvider';
import { PageContext } from '../contexts/PageContextProvider';

function PagePicker(props) {
  const { userGrantedAccess } = useContext(AuthContext);
  const { page } = useContext(PageContext);

  if (!userGrantedAccess)
    return <NotAuthenticated />
  
  switch (page) {
    case 'Home':
      return <Home />;
    case 'TopSongs':
      return <TopSongs />;
    default:
      return <Home />;
  }
}

export default PagePicker;
