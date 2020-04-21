import React, { useContext, useLayoutEffect } from 'react';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';
import { AuthContext } from '../contexts/AuthContextProvider';
import publicUrl from '../utils/publicUrl';
import '../styles/Navbar.css';

function Navbar(props) {
  const { setTimeframe, setTimeframeReadable } = useContext(TimeframeContext);
  const { logoutUser } = useContext(AuthContext);

  useLayoutEffect(() => {
    const homeButton = document.getElementById('home-button');
    styleNavButtons(homeButton);
  }, []);

  function styleNavButtons(button) {
    const allNavButtonIds = ['home-button', 'short-term', 'medium-term', 'long-term'];
    allNavButtonIds.forEach(id => {
      if (id !== button.id) {
        const navButton = document.getElementById(id);
        navButton.style.color = 'white';
      }
    });
    const computedStyles = getComputedStyle(document.body)
    const spotifyGreen = computedStyles.getPropertyValue('--spotify-green');
    button.style.color = spotifyGreen;
  }

  function handleHomeNavigation(e) {
    styleNavButtons(e.target);
    props.setPage('Home');
  }

  function handleTopSongsNavigation(e, timeframe) {
    styleNavButtons(e.target);
    setTimeframe(timeframe);
    setTimeframeReadable(e.target.innerHTML);
    props.setPage('TopSongs');
  }

  return (
    <nav>
      <div className="title">
        <img className="logo" src={publicUrl('/favicon.ico')} alt="Logo"/>
        <h1 className="app-title">Spotify Manager</h1>
      </div>
      <button id="home-button" className="top-songs-nav-item" onClick={handleHomeNavigation}>Home</button>
      <h2 className="top-songs-nav-item">Top Songs of the Past:</h2>
      <button id="short-term" onClick={e => handleTopSongsNavigation(e, 'short_term')}>
        Month
      </button>
      <button id="medium-term" onClick={e => handleTopSongsNavigation(e, 'medium_term')}>
        Six Months
      </button>
      <button id="long-term" onClick={e => handleTopSongsNavigation(e, 'long_term')}>
        Few Years
      </button>
      <button className="top-songs-nav-item" onClick={logoutUser}>Logout</button>
    </nav>
  );
}

export default Navbar;
