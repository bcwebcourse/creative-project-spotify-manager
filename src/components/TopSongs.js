import React, { useState, useEffect, useContext } from 'react';
import TopSongsChart from './TopSongsChart';
import { AuthContext } from '../contexts/AuthContextProvider';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';
import * as spotify from '../utils/fetch';

import '../styles/TopSongs.css';

function TopSongs() {
  const [topSongs, setTopSongs] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
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

  function getTopSongsTitle() {
    if (timeframe === 'short_term')
      return `Top Songs of the ${timeframeReadable}`;
    else if (timeframe === 'medium_term')
      return `Top Songs of the Past ${timeframeReadable}`;
    else if (timeframe === 'long_term')
      return `Top Songs of ${timeframeReadable}`;
  }

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
        name: getTopSongsTitle(),
        description: 'This playlist was created for you by Spotify ' + 
                     `Manager on ${currentDate} at ${currentTime}.`
      }
    });
    setPlaylistId(createPlaylistData.id);
    const songsToAdd = isAscending ? topSongs : topSongs.reverse();
    const addSongsData = await spotify.post({
      endpoint: `https://api.spotify.com/v1/playlists/${createPlaylistData.id}/tracks`,
      accessToken,
      body: songsToAdd.map(song => song.uri)
    });
    if (addSongsData.snapshot_id) setCreatePlaylistSuccess(true);
  }

  function handleReorder(e) {
    if (isAscending)
      e.target.textContent = 'Order Ascending';
    else
      e.target.textContent = 'Order Descending';
    setIsAscending(!isAscending);
  }

  return (
    <div className="top-songs">
      {createPlaylistSuccess &&
        <div className="success-message">
          Success! Go 
          <button className="nav-link" onClick={handleNavigateHome}>Home</button> 
          or open 
          <button className="nav-link" onClick={handleOpenSpotifyPlaylists}>Spotify</button> 
          to see your new playlist.
        </div>
      }
      <header className="top-songs-small-header">
        <div className="top-songs-small-header-buttons">
          <button 
           value="Descending"
           className="spotify-button top-songs-button small-header-order"
           onClick={handleReorder}
          >
            Order Descending
          </button>
          <button className="spotify-button top-songs-button" onClick={handleCreatePlaylist}>
            Create Playlist
          </button>
        </div>
        <h2 className="top-songs-title">{getTopSongsTitle()}</h2>
      </header>
      <header className="top-songs-large-header">
          <button
           value="Descending"
           className="spotify-button top-songs-button large-header-order"
           onClick={handleReorder}
          >
            Order Descending
          </button>
        <h2 className="top-songs-title">{getTopSongsTitle()}</h2>
        <button className="spotify-button top-songs-button" onClick={handleCreatePlaylist}>
          Create Playlist
        </button>
      </header>
      {topSongs.length ?
      <TopSongsChart songs={topSongs} isAscending={isAscending} /> :
      <h2 className="loading-indicator">Loading...</h2>}
    </div>
  );
}

export default TopSongs;