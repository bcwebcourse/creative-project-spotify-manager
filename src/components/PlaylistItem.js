import React, {useContext} from 'react';
import '../styles/PlaylistItem.css';
import { PageContext } from '../contexts/PageContextProvider';
import { PlaylistContext} from '../contexts/PlaylistContextProvider';
import publicUrl from '../utils/publicUrl';

function PlaylistItem(props) {
  const { setPage } = useContext(PageContext);
  const { setPlaylist } = useContext(PlaylistContext);
  function handlePlayListChange(e, playlistName) {
      setPage(`Playlist/${playlistName}`);
      setPlaylist(props.playlist);
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
