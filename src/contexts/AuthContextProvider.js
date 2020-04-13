import React, { createContext, useState, useLayoutEffect } from 'react';
import * as utils from '../utils.js';

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [accessToken, setAccessToken] = useState(utils.initialState('accessToken'));
  const [exprDate, setExprDate] = useState(utils.initialState('exprDate'));
  const [userGrantedAccess, setUserGrantedAccess] = useState(utils.initialState('userGrantedAccess', true));

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
      utils.storeItem('userGrantedAccess', false);
      return;
    }
    const hash = new URLSearchParams(window.location.hash.substr(1));
    const token = hash.get('access_token');
    if (token) {
      const numSecondsUntilExpr = parseInt(hash.get('expires_in'));
      const date = utils.createExprDate(numSecondsUntilExpr);
      setAccessToken(token);
      setExprDate(date);
      setUserGrantedAccess(true);
      utils.storeItem('accessToken', token);
      utils.storeItem('exprDate', date.toString());
      utils.storeItem('userGrantedAccess', true);
      window.location.href = '/';
      return;
    }    
    window.location.href = utils.loginRedirectUrl();
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
