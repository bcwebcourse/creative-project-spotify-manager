import React, { useContext } from 'react';
import Home from './Home';
import NotAuthenticated from './NotAuthenticated';
import { AuthContext } from '../contexts/AuthContextProvider';

function PagePicker() {
  const { userGrantedAccess } = useContext(AuthContext);
  return (
    <div>
      {userGrantedAccess ?
      <Home /> :
      <NotAuthenticated />}
    </div>
  );
}

export default PagePicker;
