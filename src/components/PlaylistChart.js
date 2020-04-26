import React, { useState, useEffect, useContext } from 'react';
import TopSongsChart from './TopSongsChart';
import { AuthContext } from '../contexts/AuthContextProvider';
import { PlaylistContext} from '../contexts/PlaylistContextProvider';
import '../styles/TopSongs.css';

function PlaylistChart() {
  const [songs, setSongs] = useState([]);
  const { playlist} = useContext(PlaylistContext);
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
        var i;
        for (i = 0; i < data.items.length; i++){
            data.items[i] = data.items[i].track;
        }
        setSongs(data.items);
      }
      setIsAscending(true);
    fetchPlayListTracks();
    }, [accessToken, authenticateUser, playlist.tracks.href]);
    console.log(isAscending);
  return (
    <div className="top-songs">
      <header className="top-songs-small-header">
        <h2 className="top-songs-title">{playlist.name}</h2>
      </header>
      {songs.length ?
      <TopSongsChart songs={songs} isAscending={isAscending} /> :
      <h2 className="loading-indicator">Loading...</h2>}
    </div>
  );
}

export default PlaylistChart;