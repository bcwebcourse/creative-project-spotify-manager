import React, { useState }from 'react';
import PagePicker from './PagePicker';
import Navbar from './Navbar';
import AuthContextProvider from '../contexts/AuthContextProvider';
import TimeframeContextProvider from '../contexts/TimeframeContextProvider';
import '../styles/App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [page, setPage] = useState('Home');

  return (
    <AuthContextProvider>
        <TimeframeContextProvider>
          <div className="main">
            <Navbar setPage={setPage} />
            <div className="content">
              <PagePicker page={page} />
            </div>
          </div>
        </TimeframeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
