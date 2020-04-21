import React from 'react';
import '../styles/Home.css';
import PlaylistItem from './PlaylistItem';

function Playlists({ playlists }) {
  return (
    <div className="playlists">
      {playlists.map((playlist, idx) =>
        <PlaylistItem key={idx} playlist={playlist}/>
      )}
    </div>
  );
}

export default Playlists;
