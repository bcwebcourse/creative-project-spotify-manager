import React, { useState, useLayoutEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import '../styles/Home.css';

function Home() {
  const [userData, setUserData] = useState('');
  const { accessToken } = useContext(AuthContext);

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
    </div>
  );
}

export default Home;
