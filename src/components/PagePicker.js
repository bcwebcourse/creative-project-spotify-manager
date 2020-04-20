import React, { useContext } from 'react';
import Home from './Home';
import TopSongs from './TopSongs';
import NotAuthenticated from './NotAuthenticated';
import { AuthContext } from '../contexts/AuthContextProvider';

function PagePicker(props) {
  const { userGrantedAccess } = useContext(AuthContext);

  if (!userGrantedAccess)
    return <NotAuthenticated />
  
  switch (props.page) {
    case 'Home':
      return <Home />;
    case 'TopSongs':
      return <TopSongs />;
    default:
      return <Home />;
  }
}

export default PagePicker;
