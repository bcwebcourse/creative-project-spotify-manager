import React, { useState, useEffect, useContext } from 'react';
import TopSongsChart from './TopSongsChart';
import { AuthContext } from '../contexts/AuthContextProvider';
import { getCurrentDateString } from '../utils/date';
import * as spotify from '../utils/fetch';
import '../styles/TopSongs.css';

function TopSongs({ timeframe, timeframeReadable }) {
  const [topSongs, setTopSongs] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [createPlaylistSuccess, setCreatePlaylistSuccess] = useState(false);
  const [playlistId, setPlaylistId] = useState('');

  const { accessToken, authenticateUser } = useContext(AuthContext);

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
    authenticateUser();
    setTopSongs([]);
    setIsAscending(true);
    setCreatePlaylistSuccess(false);
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
    const order = isAscending ? 'ascending' : 'descending';
    const range = isAscending ? '1 - 50' : '50 - 1';
    const createPlaylistData = await spotify.post({
      endpoint: `https://api.spotify.com/v1/users/${userData.id}/playlists`,
      accessToken,
      body: {
        name: getTopSongsTitle(),
        description: 'This playlist was created for you by Spotify ' + 
                     `Manager on ${getCurrentDateString()}. Ranked in ` +
                     `${order} order from ${range}.`
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

  function handleReorder(e) {
    if (topSongs.length) {
      setIsAscending(!isAscending);
      setTopSongs(topSongs.reverse());
    }
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
           className="spotify-button top-songs-button small-header-order"
           onClick={handleReorder}
          >
            Order {isAscending ? 'Descending' : 'Ascending'}
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
            Order {isAscending ? 'Descending' : 'Ascending'}
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
