import React from 'react';
import { loginRedirectUrl } from '../utils/auth';
import '../styles/NotAuthenticated.css';

function NotAuthenticated(props) {

  function handleLoginRequest(e) {
    window.location.href = loginRedirectUrl();
  }

  return (
    <div>
      <h1>Please log in to your Spotify account.</h1>
      <p>
        In order to use this web app, you must log in to your Spotify account and grant all the necessary permissions.
        If it has been more than an hour since you last logged in, you may be asked to do so again.
      </p>
      <button onClick={handleLoginRequest}>Log in</button>
    </div>
  );
}

export default NotAuthenticated;
