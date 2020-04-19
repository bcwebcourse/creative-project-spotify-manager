import React from 'react';
import '../styles/TopSongsItem.css';

function TopSongsItem(props) {
  let songName = props.song.name.substr(0, 40);
  if (songName < props.song.name)
    songName += '...';
  const artistNames = props.song.artists.map(artist => artist.name).join(', ');

  return (
    <div className="song-row">
      <div className="song-ranking">{props.rank}.</div>
      <div>{songName}</div>
      <div>{artistNames}</div>
      <div className="song-popularity">{props.song.popularity}</div>
    </div>
  );
}

export default TopSongsItem;