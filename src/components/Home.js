import React, { useState, useLayoutEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import '../styles/Home.css';
import PlaylistItem from './PlaylistItem';

function Home() {
  const [userData, setUserData] = useState('');
  const [userPlaylists, setUserPlaylists] = useState([]);
  const { accessToken } = useContext(AuthContext);
  useLayoutEffect(() => {
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
    async function fetchUserData() {
      const res = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await res.json();
      setUserData(data);
    }
    fetchUserData();
    fetchUserPlaylist();
  }, [accessToken]);
  console.log(userPlaylists);
  return (
    <div>
      <h3>User Data</h3>
      <div className="user-name">
        Name: {userData.display_name}
      </div>
      <div className="user-email">
        Email: {userData.email}
      </div>
      <div className="playlists">
        {userPlaylists.map((playlist, idx) =>
          <PlaylistItem key={idx} playlist={playlist}/>
        )}
      </div>
    </div>
  );
}

export default Home;
