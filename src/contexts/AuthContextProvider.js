import React, { createContext, useState, useEffect } from 'react';
import { initialState, storeItem } from '../utils/storage';
import { createExprDate, loginRedirectUrl, timeout } from '../utils/auth';

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [accessToken, setAccessToken] = useState(initialState('accessToken'));
  const [exprDate, setExprDate] = useState(initialState('exprDate'));
  const [userGrantedAccess, setUserGrantedAccess] = useState(initialState('userGrantedAccess', true));

  function userIsAuthenticated() {
    const currentDate = new Date();
    const expirationDate = new Date(exprDate);
    return accessToken && userGrantedAccess && (currentDate < expirationDate);
  }

  function authenticateUser() {
    if (userIsAuthenticated())
      return;
    const search = new URLSearchParams(window.location.search.substr(1));
    if (search.get('error')) {
      setUserGrantedAccess(false);
      storeItem('userGrantedAccess', false);
      return;
    }
    const hash = new URLSearchParams(window.location.hash.substr(1));
    const token = hash.get('access_token');
    if (token) {
      const numSecondsUntilExpr = parseInt(hash.get('expires_in'));
      const date = createExprDate(numSecondsUntilExpr);
      setAccessToken(token);
      setExprDate(date);
      setUserGrantedAccess(true);
      storeItem('accessToken', token);
      storeItem('exprDate', date.toString());
      storeItem('userGrantedAccess', true);
      window.location.href = process.env.PUBLIC_URL;
      return;
    }    
    window.location.href = loginRedirectUrl();
  }

  async function logoutUser() {
    storeItem('accessToken', '');
    storeItem('exprDate', '');
    storeItem('userGrantedAccess', false);
    const logoutUrl = 'https://accounts.spotify.com/en/logout';
    const windowOptions = 'width=100,height=100,top=0,left=0,toolbar=1,location=1,' +
                         'directories=1,status=1,menubar=1,scrollbars=1';
    const spotifyLogoutWindow = window.open(logoutUrl, 'Spotify Logout', windowOptions);
    await timeout(1300);
    spotifyLogoutWindow.close()
    window.location.href = loginRedirectUrl();
  }

  useEffect(authenticateUser, []);

  const context = {
    accessToken,
    userGrantedAccess,
    userIsAuthenticated,
    authenticateUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
