import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import '../styles/NotAuthenticated.css';

function NotAuthenticated() {
  const { authenticateUser }= useContext(AuthContext);

  return (
    <div>
      <h1>Please log in to your Spotify account.</h1>
      <p>
        In order to use this web app, you must log in to your Spotify account and grant all the necessary permissions.
        If it has been more than an hour since you last logged in, you may be asked to do so again.
      </p>
      <button className="spotify-button" onClick={authenticateUser}>Log in</button>
    </div>
  );
}

export default NotAuthenticated;
