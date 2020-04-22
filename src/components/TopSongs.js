import React, { useState, useEffect, useContext } from 'react';
import TopSongsChart from './TopSongsChart';
import { AuthContext } from '../contexts/AuthContextProvider';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';
import * as spotify from '../utils/fetch';

import '../styles/TopSongs.css';

function TopSongs() {
  const [topSongs, setTopSongs] = useState([]);
  const [createPlaylistSuccess, setCreatePlaylistSuccess] = useState(false);
  const [playlistId, setPlaylistId] = useState('');

  const { accessToken, authenticateUser } = useContext(AuthContext);
  const { timeframe, timeframeReadable } = useContext(TimeframeContext);

  useEffect(() => {
    async function fetchTopSongs() {
      const params = new URLSearchParams({
        time_range: timeframe,
        limit: 50
      });
      const topSongsData = await spotify.get({
        endpoint: `https://api.spotify.com/v1/me/top/tracks?${params}`,
        accessToken
      });
      setTopSongs(topSongsData.items);
    }
    setCreatePlaylistSuccess(false);
    authenticateUser();
    fetchTopSongs();
  }, [authenticateUser, accessToken, timeframe]);

  function handleNavigateHome() {
    window.location.href = process.env.PUBLIC_URL;
  }

  function handleOpenSpotifyPlaylists() {
    window.open(`https://open.spotify.com/playlist/${playlistId}`);
  }

  async function handleCreatePlaylist(e) {
    authenticateUser();
    const userData = await spotify.get({
      endpoint: 'https://api.spotify.com/v1/me',
      accessToken
    });
    const date = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const currentDate = date.toLocaleDateString(undefined, dateOptions);
    const currentTime = date.toLocaleTimeString([], timeOptions);
    const createPlaylistData = await spotify.post({
      endpoint: `https://api.spotify.com/v1/users/${userData.id}/playlists`,
      accessToken,
      body: {
        name: `Top Songs of the Past ${timeframeReadable}`,
        description: 'This playlist was created for you by Spotify ' + 
                     `Manager on ${currentDate} at ${currentTime}.`
      }
    });
    setPlaylistId(createPlaylistData.id);
    const addSongsData = await spotify.post({
      endpoint: `https://api.spotify.com/v1/playlists/${createPlaylistData.id}/tracks`,
      accessToken,
      body: topSongs.map(song => song.uri)
    });
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
      <header className="top-songs-small-header">
        <div className="top-songs-small-header-buttons">
          <button className="spotify-button top-songs-button">
            Filter Button
          </button>
          <button className="spotify-button top-songs-button" onClick={handleCreatePlaylist}>
            Create Playlist
          </button>
        </div>
        <h2 className="top-songs-title">Top Songs of the Past {timeframeReadable}</h2>
      </header>
      <header className="top-songs-large-header">
        <button className="spotify-button top-songs-button">
          Filter Button
        </button>
        <h2 className="top-songs-title">Top Songs of the Past {timeframeReadable}</h2>
        <button className="spotify-button top-songs-button" onClick={handleCreatePlaylist}>
          Create Playlist
        </button>
      </header>
      {topSongs.length ?
      <TopSongsChart songs={topSongs} /> :
      <h2 className="loading-indicator">Loading...</h2>}
    </div>
  );
}

export default TopSongs;