import React, { useState, useLayoutEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import '../styles/Home.css';
import PlaylistItem from './PlaylistItem';

function Home() {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const { accessToken, authenticateUser } = useContext(AuthContext);

  useLayoutEffect(() => {
    authenticateUser();
    async function fetchUserPlaylist() {
      const endpoint = 'https://api.spotify.com/v1/me/playlists?';
      const res = await fetch(endpoint, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await res.json();
      setUserPlaylists(data.items);
    }
    fetchUserPlaylist();
  }, [accessToken]);

  return (
    <div>
      <div className="home-header">
        <h1>Welcome to Spotify Manager.</h1>
        <p>
          To see your top songs, use the navigation bar on the left. If you like what you see, 
          click "create playlist" to generate a new playlist of those songs. Come back here 
          to see your new playlist appear below, or open up Spotify to start listening right away.
        </p>
      </div>
      <h2 className="home-section-header">Your Playlists</h2>
      <div className="playlists">
        {userPlaylists.map((playlist, idx) =>
          <PlaylistItem key={idx} playlist={playlist}/>
        )}
      </div>
    </div>
  );
}

export default Home;
