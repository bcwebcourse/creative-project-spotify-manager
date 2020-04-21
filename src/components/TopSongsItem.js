import React from 'react';
import '../styles/TopSongsItem.css';

function TopSongsItem(props) {
  const artistNames = props.song.artists.map(artist => artist.name).join(', ');

  return (
    <div className="song-row">
      <div className="song-ranking">{props.rank}.</div>
      <div>{props.song.name}</div>
      <div className="song-artist">{artistNames}</div>
      <div className="song-popularity">{props.song.popularity} / 100</div>
    </div>
  );
}

export default TopSongsItem;