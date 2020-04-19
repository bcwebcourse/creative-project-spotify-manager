import React, { useState, useLayoutEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { PageContext } from '../contexts/PageContextProvider';
import { TimeframeContext } from '../contexts/TimeframeContextProvider';
import '../styles/Home.css';

function Home() {
  const [userData, setUserData] = useState('');
  const { accessToken } = useContext(AuthContext);
  const { setPage } = useContext(PageContext);
  const { setTimeframe, setTimeframeReadable } = useContext(TimeframeContext);

  useLayoutEffect(() => {
    async function fetchUserData() {
      const res = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await res.json();
      setUserData(data);
    }
    fetchUserData();
  }, [accessToken]);

  function handleTopSongsNavigation(e, timeframe) {
    setTimeframe(timeframe);
    setTimeframeReadable(e.target.innerHTML);
    setPage('TopSongs');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <h3>User Data</h3>
      <div>
        Name: {userData.display_name}
      </div>
      <div>
        Email: {userData.email}
      </div>
      <h3>Your Top Songs of the Past:</h3>
      <button onClick={e => handleTopSongsNavigation(e, 'short_term')}>
        Month
      </button>
      <button onClick={e => handleTopSongsNavigation(e, 'medium_term')}>
        Six Months
      </button>
      <button onClick={e => handleTopSongsNavigation(e, 'long_term')}>
        Few Years
      </button>
    </div>
  );
}

export default Home;
