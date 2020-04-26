import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import '../styles/Home.css';
import Playlists from './Playlists';

function Home() {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const { accessToken, authenticateUser } = useContext(AuthContext);
  useEffect(() => {
    authenticateUser();
    async function fetchUserPlaylist() {
      const params = new URLSearchParams({ limit: 50 });
      const endpoint = `https://api.spotify.com/v1/me/playlists?${params}`;
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
  }, [accessToken, authenticateUser]);
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Spotify Manager.</h1>
        <p>
          We believe that people deserve to have more control over their music listening experience. 
          That's why we created Spotify Manager. Use the navigation bar to checkout your top 50 songs 
          across various timespans, and if you like what you see, click "create playlist" to generate 
          a new playlist of those songs. Then come back here to see that playlist appear below, 
          or open up Spotify to start listening right away.
        </p>
      </header>
      <section className="home-body">
        {userPlaylists.length ? (
        <div>
          <h2 className="home-body-header">Your Playlists</h2>
          <Playlists playlists={userPlaylists} />
        </div>
        ) : 
        <h2 className="loading-indicator">Loading...</h2>}
      </section>
    </div>
  );
}

export default Home;
