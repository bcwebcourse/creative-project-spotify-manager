import React, { useContext } from 'react';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';
import { AuthContext } from '../contexts/AuthContextProvider';
import publicUrl from '../utils/publicUrl';
import '../styles/Navbar.css';

function Navbar(props) {
  const { setTimeframe, setTimeframeReadable } = useContext(TimeframeContext);
  const { logoutUser } = useContext(AuthContext);

  function handleTopSongsNavigation(e, timeframe) {
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
      <button className="top-songs-nav-item" onClick={() => props.setPage('Home')}>Home</button>
      <h2 className="top-songs-nav-item">Your Top Songs of the Past:</h2>
      <button onClick={e => handleTopSongsNavigation(e, 'short_term')}>
        Month
      </button>
      <button onClick={e => handleTopSongsNavigation(e, 'medium_term')}>
        Six Months
      </button>
      <button onClick={e => handleTopSongsNavigation(e, 'long_term')}>
        Few Years
      </button>
      <button className="top-songs-nav-item" onClick={logoutUser}>Logout</button>
    </nav>
  );
}

export default Navbar;
