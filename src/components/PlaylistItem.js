import React from 'react';
import '../styles/PlaylistItem.css';

function PlaylistItem(props) {
  let playlistName = props.playlist.name.substr(0, 25);
  if (playlistName < props.playlist.name)
    playlistName += '...';
  function handlePlayListChange(e, playlist) {
      // props.setPage(playlist);
  } 

  return (
    <div className="playlist-obj">
        <button onClick={e => handlePlayListChange(e, props.playlist.name)}>
          <img className="playlist-thumbnail" src={props.playlist.images[0].url} alt="playlist"/>
        </button>
        <p>
          {playlistName}
        </p>
    </div>
  );
}

export default PlaylistItem;