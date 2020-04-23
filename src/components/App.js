import React from 'react';
import PagePicker from './PagePicker';
import Navbar from './Navbar';
import AuthContextProvider from '../contexts/AuthContextProvider';
import PageContextProvider from '../contexts/PageContextProvider';
import TimeframeContextProvider from '../contexts/TimeframeContextProvider';
import '../styles/App.css';

function App() {
  return (
    <AuthContextProvider>
      <PageContextProvider>
        <TimeframeContextProvider>
          <div className="main">
            <Navbar />
            <div className="content">
              <PagePicker />
            </div>
          </div>
        </TimeframeContextProvider>
      </PageContextProvider>
    </AuthContextProvider>
  );
}

export default App;