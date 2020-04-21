import React from 'react';
import '../styles/PlaylistItem.css';
import publicUrl from '../utils/publicUrl';

function PlaylistItem(props) {

  function handlePlayListChange(e, playlistName) {
      // props.setPage(playlistName);
      console.log(playlistName);
  }

  function playlistImage() {
    if (props.playlist.images.length)
      return props.playlist.images[0].url;
    else
      return publicUrl('/empty-playlist.png');
  }

  return (
    <div className="playlist-obj">
        <img
          className="playlist-thumbnail"
          src={playlistImage()}
          alt="playlist"
          onClick={e => handlePlayListChange(e, props.playlist.name)}
        />
        <p>
          {props.playlist.name}
        </p>
    </div>
  );
}

export default PlaylistItem;
