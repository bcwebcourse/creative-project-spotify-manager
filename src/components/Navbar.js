import React, { useContext, useLayoutEffect } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { PageContext } from '../contexts/PageContextProvider';
import publicUrl from '../utils/publicUrl';
import '../styles/Navbar.css';

function Navbar() {
  const { logoutUser } = useContext(AuthContext);
  const { setPage } = useContext(PageContext);

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
    setPage('Home');
  }

  function handleTopSongsNavigation(e, timeframe) {
    styleNavButtons(e.target);
    setPage(`TopSongs-${timeframe}`);
  }

  return (
    <nav>
      <header className="title">
        <img className="logo" src={publicUrl('/favicon.ico')} alt="Logo"/>
        <h1 className="app-title">Spotify Manager</h1>
      </header>
      <section className="nav-body">
        <button id="home-button" className="top-songs-nav-item" onClick={handleHomeNavigation}>Home</button>
        <h2 className="top-songs-nav-item">Your Top Songs:</h2>
        <button value="Month" id="short-term" onClick={e => handleTopSongsNavigation(e, 'short_term')}>
          Month
        </button>
        <button value="Six Months" id="medium-term" onClick={e => handleTopSongsNavigation(e, 'medium_term')}>
          Six Months
        </button>
        <button value="All Time" id="long-term" onClick={e => handleTopSongsNavigation(e, 'long_term')}>
          All Time
        </button>
        <button className="top-songs-nav-item" onClick={logoutUser}>Logout</button>
      </section>
    </nav>
  );
}

export default Navbar;
