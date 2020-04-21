import React, { useEffect } from 'react';
import TopSongsItem from './TopSongsItem';
import '../styles/TopSongsChart.css';

function TopSongsChart({ songs }) {

  function adjustContentToFitScreen() {
    const windowWidth = window.innerWidth || 
                        document.documentElement.clientWidth ||
                        document.body.clientWidth;
    const songPopularity = document.querySelector('#song-popularity');
    if (windowWidth <= 500)
      songPopularity.innerHTML = 'Pop.';
    else
      songPopularity.innerHTML = 'Popularity';

  }

  useEffect(() => {
    window.onresize = adjustContentToFitScreen;
  });

  return (
    <div className="top-songs-chart">
      <header className="top-songs-chart-header">
        <div className="song-ranking-placeholder"></div>
        <div>Title</div>
        <div className="song-artist">Artist</div>
        <div id="song-popularity" className="song-popularity">Popularity</div>
      </header>
      {songs.map((song, idx) =>
        <TopSongsItem key={idx} rank={idx + 1} song={song}/>
      )}
    </div>
  );
}

export default TopSongsChart;
