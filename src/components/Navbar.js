import React, { useContext } from 'react';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';
import { storeItem } from '../utils/storage';
import { loginRedirectUrl } from '../utils/auth';
import publicUrl from '../utils/publicUrl';
import '../styles/Navbar.css';

function Navbar(props) {
  const { setTimeframe, setTimeframeReadable } = useContext(TimeframeContext);

  function handleTopSongsNavigation(e, timeframe) {
    setTimeframe(timeframe);
    setTimeframeReadable(e.target.innerHTML);
    props.setPage('TopSongs');
  } 

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

  async function handleLogout() {
    storeItem('accessToken', '');
    storeItem('exprDate', '');
    storeItem('userGrantedAccess', false);
    const logoutUrl = 'https://accounts.spotify.com/en/logout';
    const spotifyLogoutWindow = window.open(logoutUrl, 'Spotify Logout', 'width=100,height=100,top=0,left=0,toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1');
    await timeout(1300);
    spotifyLogoutWindow.close()
    window.location.href = loginRedirectUrl();
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
      <button className="top-songs-nav-item" onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
