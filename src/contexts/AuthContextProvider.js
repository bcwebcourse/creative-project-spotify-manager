import React, { createContext, useState, useLayoutEffect } from 'react';
import { initialState, storeItem } from '../utils/storage';
import { createExprDate, loginRedirectUrl } from '../utils/auth';

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [accessToken, setAccessToken] = useState(initialState('accessToken'));
  const [exprDate, setExprDate] = useState(initialState('exprDate'));
  const [userGrantedAccess, setUserGrantedAccess] = useState(initialState('userGrantedAccess', true));

  function userIsAuthenticated() {
    const currentDate = new Date();
    const expirationDate = new Date(exprDate);
    return accessToken && userGrantedAccess && currentDate < expirationDate;
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

  useLayoutEffect(authenticateUser, [accessToken, exprDate, userGrantedAccess]);

  const context = {
    accessToken,
    userGrantedAccess,
    userIsAuthenticated,
    authenticateUser
  }

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
