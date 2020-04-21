import React from 'react';
import '../styles/PlaylistItem.css';
import publicUrl from '../utils/publicUrl';

function PlaylistItem(props) {
  let playlistName = props.playlist.name.substr(0, 25);
  if (playlistName < props.playlist.name)
    playlistName += '...';

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
          {playlistName}
        </p>
    </div>
  );
}

export default PlaylistItem;
