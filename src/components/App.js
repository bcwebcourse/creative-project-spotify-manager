import React from 'react';
import PagePicker from './PagePicker';
import AuthContextProvider from '../contexts/AuthContextProvider';
import PageContextProvider from '../contexts/PageContextProvider';
import TimeframeContextProvider from '../contexts/TimeframeContextProvider';
import '../styles/App.css';

function App() {
  return (
    <AuthContextProvider>
      <PageContextProvider>
        <TimeframeContextProvider>
          <PagePicker />
        </TimeframeContextProvider>
      </PageContextProvider>
    </AuthContextProvider>
  );
}

export default App;
