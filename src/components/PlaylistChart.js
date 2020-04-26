import React, { useState, useEffect, useContext } from 'react';
import TopSongsChart from './TopSongsChart';
import { AuthContext } from '../contexts/AuthContextProvider';
import { PlaylistContext} from '../contexts/PlaylistContextProvider';
import '../styles/PlaylistItem.css';
import '../styles/TopSongs.css';
import publicUrl from '../utils/publicUrl';

function PlaylistChart() {
  const [songs, setSongs] = useState([]);
  const { playlist } = useContext(PlaylistContext);
  const { accessToken, authenticateUser } = useContext(AuthContext);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    async function fetchPlayListTracks() {
        const endpoint = playlist.tracks.href;
        const res = await fetch(endpoint, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const data = await res.json();
        const songData = data.items.map(item => item.track);
        setSongs(songData);
      }
      setIsAscending(false);
    fetchPlayListTracks();
  }, [accessToken, authenticateUser, playlist.tracks.href]);

  function playlistImage() {
    if (playlist.images.length)
        return playlist.images[0].url;
    else
        return publicUrl('/empty-playlist.png');
    }

  return (
    <div className="top-songs">
      <header className="top-songs-small-header">
        <h2 className="top-songs-title">{ playlist.name }</h2>
      </header>
      <header className="top-songs-large-header">
        <img
          className="playlist-thumbnail"
          src={playlistImage()}
          alt="playlist"
        />
        <h2 className="top-songs-title">{ playlist.name }</h2>
      </header>
      {songs.length ?
      <TopSongsChart songs={songs} isAscending={isAscending} /> :
      <h2 className="loading-indicator">Loading...</h2>}
    </div>
  );
}

export default PlaylistChart;
