import React, { useState, useLayoutEffect, useContext } from 'react';
import TopSongsItem from './TopSongsItem';
import { AuthContext } from '../contexts/AuthContextProvider';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';

import '../styles/TopSongs.css';

function TopSongs() {
  const [topSongs, setTopSongs] = useState([]);
  const [createPlaylistSuccess, setCreatePlaylistSuccess] = useState(false);
  const [playlistId, setPlaylistId] = useState('');

  const { accessToken, authenticateUser } = useContext(AuthContext);
  const { timeframe, timeframeReadable } = useContext(TimeframeContext);


  useLayoutEffect(() => {
    setCreatePlaylistSuccess(false);
    authenticateUser();
    async function fetchTopSongs() {
      const params = new URLSearchParams({
        time_range: timeframe,
        limit: 50
      });
      const endpoint = 'https://api.spotify.com/v1/me/top/tracks?' + params;
      const res = await fetch(endpoint, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await res.json();
      setTopSongs(data.items);
    }
    fetchTopSongs();
  }, [authenticateUser, accessToken, timeframe]);

  function handleNavigateHome() {
    window.location.href = process.env.PUBLIC_URL;
  }

  function handleOpenSpotifyPlaylists() {
    window.open(`https://open.spotify.com/playlist/${playlistId}`);
  }

  async function handleCreatePlaylist(e) {
    const userRes = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
    const userData = await userRes.json();
    const date = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const currentDate = date.toLocaleDateString(undefined, dateOptions);
    const currentTime = date.toLocaleTimeString([], timeOptions);
    const createPlaylistEndpoint = `https://api.spotify.com/v1/users/${userData.id}/playlists`;
    const createPlaylistRes = await fetch(createPlaylistEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        name: `Top Songs of the Past ${timeframeReadable}`,
        description: `This playlist was created for you by Spotify Manager on ${currentDate} at ${currentTime}.`
      })
    });
    const createPlaylistData = await createPlaylistRes.json();
    console.log(createPlaylistData);
    await setPlaylistId(createPlaylistData.id);
    const songUris = topSongs.map(song => song.uri);
    const addSongsEndpoint = `https://api.spotify.com/v1/playlists/${createPlaylistData.id}/tracks`;
    const addSongsRes = await fetch(addSongsEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(songUris)
    });
    const addSongsData = await addSongsRes.json();
    console.log(addSongsData);
    if (addSongsData.snapshot_id) setCreatePlaylistSuccess(true);
  }

  return (
    <div className="top-songs">
      {createPlaylistSuccess &&
        <div className="success-message">
          Success! Go to the 
          <button className="nav-link" onClick={handleNavigateHome}>Home page</button> 
          or open 
          <button className="nav-link" onClick={handleOpenSpotifyPlaylists}>Spotify</button> 
          to see your new playlist.
        </div>
      }
      <header className="top-songs-header">
        <button className="top-songs-button">
          Filter Button
        </button>
        <h2 className="top-songs-title">Top Songs of the Past {timeframeReadable}</h2>
        <button className="top-songs-button" onClick={handleCreatePlaylist}>
          Create Playlist
        </button>
      </header>
      <header className="top-songs-charts-header">
        <div className="song-ranking-placeholder"></div>
        <div>Title</div>
        <div className="song-artist">Artist</div>
        <div className="song-popularity">Popularity / 100</div>
      </header>
      {topSongs.map((song, idx) =>
        <TopSongsItem key={idx} rank={idx + 1} song={song}/>
      )}
    </div>
  );
}

export default TopSongs;