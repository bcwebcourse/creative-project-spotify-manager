import React, { useContext } from 'react';
import { loginRedirectUrl } from '../utils/auth';
import '../styles/NotAuthenticated.css';

function NotAuthenticated() {
  function handleLogin() {
    window.location.href = loginRedirectUrl();
  }

  return (
    <div className="not-authenticated">
      <h1>Please log in to your Spotify account.</h1>
      <p>
        In order to use this web app, you must log in to your Spotify account and grant all the necessary permissions.
        If it has been more than an hour since you last logged in, you may be asked to do so again.
      </p>
      <button className="spotify-button login-button" onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default NotAuthenticated;
