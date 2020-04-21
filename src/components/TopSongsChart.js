import React from 'react';
import TopSongsItem from './TopSongsItem';
import '../styles/TopSongsChart.css';

function TopSongsChart({ songs }) {
  return (
    <div className="top-songs-chart">
      <header className="top-songs-chart-header">
        <div className="song-ranking-placeholder"></div>
        <div>Title</div>
        <div className="song-artist">Artist</div>
        <div className="song-popularity">Popularity / 100</div>
      </header>
      {songs.map((song, idx) =>
        <TopSongsItem key={idx} rank={idx + 1} song={song}/>
      )}
    </div>
  );
}

export default TopSongsChart;
