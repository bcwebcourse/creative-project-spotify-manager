import React from 'react';
import TopSongsItem from './TopSongsItem';
import '../styles/TopSongsChart.css';

function TopSongsChart({ songs, isAscending }) {
  let topSongsItems = songs.map((song, idx) => {
    const rank = isAscending ? 50 - idx : idx + 1;
    return <TopSongsItem key={idx} rank={rank} song={song}/>
  });

  return (
    <div className="top-songs-chart">
      <header className="top-songs-chart-header">
        <div className="song-ranking-placeholder"></div>
        <div>Title</div>
        <div className="song-artist">Artist</div>
        <div id="song-popularity" className="song-popularity">Popularity</div>
      </header>
      {topSongsItems}
    </div>
  );
}

export default TopSongsChart;