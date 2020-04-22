import React, { useContext, useLayoutEffect } from 'react';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';
import { AuthContext } from '../contexts/AuthContextProvider';
import { PageContext } from '../contexts/PageContextProvider';
import publicUrl from '../utils/publicUrl';
import '../styles/Navbar.css';

function Navbar() {
  const { setTimeframe, setTimeframeReadable } = useContext(TimeframeContext);
  const { logoutUser } = useContext(AuthContext);
  const { setPage } = useContext(PageContext);

  useLayoutEffect(() => {
    const homeButton = document.getElementById('home-button');
    styleNavButtons(homeButton);
    window.onresize = adjustElementsToFitScreen;
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
    setPage('Home');
  }

  function handleTopSongsNavigation(e, timeframe) {
    styleNavButtons(e.target);
    setTimeframe(timeframe);
    setTimeframeReadable(e.target.value);
    setPage('TopSongs');
  }

  function adjustElementsToFitScreen() {
    const windowWidth = window.innerWidth || 
                        document.documentElement.clientWidth ||
                        document.body.clientWidth;
    if (windowWidth <= 370) {
      const mediumTerm = document.getElementById('medium-term');
      mediumTerm.textContent = '6 Months';
      const longTerm = document.getElementById('long-term');
      longTerm.textContent = 'Years';
    }
    else {
      const mediumTerm = document.getElementById('medium-term');
      mediumTerm.textContent = 'Six Months';
      const longTerm = document.getElementById('long-term');
      longTerm.textContent = 'Few Years';
    }
  }

  return (
    <nav>
      <header className="title">
        <img className="logo" src={publicUrl('/favicon.ico')} alt="Logo"/>
        <h1 className="app-title">Spotify Manager</h1>
      </header>
      <section className="nav-body">
        <button id="home-button" className="top-songs-nav-item" onClick={handleHomeNavigation}>Home</button>
        <h2 className="top-songs-nav-item">Top Songs of the Past:</h2>
        <button value="Month" id="short-term" onClick={e => handleTopSongsNavigation(e, 'short_term')}>
          Month
        </button>
        <button value="Six Months" id="medium-term" onClick={e => handleTopSongsNavigation(e, 'medium_term')}>
          Six Months
        </button>
        <button value="Few Years" id="long-term" onClick={e => handleTopSongsNavigation(e, 'long_term')}>
          Few Years
        </button>
        <button className="top-songs-nav-item" onClick={logoutUser}>Logout</button>
      </section>
    </nav>
  );
}

export default Navbar;
