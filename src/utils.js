import client from './client.js';

const authEndpoint = "https://accounts.spotify.com/authorize";
const scopes = ['playlist-modify-public', 'user-read-email'];

export function loginRedirectUrl() {
  const authQueryString = new URLSearchParams();
  authQueryString.append('client_id', client.client_id);
  authQueryString.append('response_type', 'token');
  authQueryString.append('redirect_uri', client.redirect_uri);
  authQueryString.append('scope', scopes.join(' '));
  return `${authEndpoint}?${authQueryString.toString()}`;
}

export function getItem(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

export function storeItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function initialState(variable, defaultVal) {
  if (!defaultVal) defaultVal = '';
  return getItem(variable) || defaultVal;
}

export function createExprDate(numSecondsUntilExpr) {
  const date = new Date();
  const exprDateBuffer = 30 * 1000;
  date.setTime(date.getTime() + exprDateBuffer);
  return date;
}