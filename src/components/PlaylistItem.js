import React from 'react';
import '../styles/PlaylistItem.css';

function PlaylistItem(props) {
  let playlistName = props.playlist.name.substr(0, 25);
  console.log(props.playlist.images);
  if (playlistName < props.playlist.name)
    playlistName += '...';
    function handlePlayListChange(e, playlist) {
        props.setPage(playlist);
    } 

  return (
    <div className="playlist-obj">
        <button className="btn" onClick={e => handlePlayListChange(e, props.playlist.name)}>
          <img src={props.playlist.images[0].url} alt="playlist"/>
        </button>
        <body>
          {playlistName}
        </body>
    </div>
  );
}

export default PlaylistItem;