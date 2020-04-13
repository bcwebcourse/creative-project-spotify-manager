import React from 'react';
import PagePicker from './PagePicker';
import AuthContextProvider from '../contexts/AuthContextProvider';
import '../styles/App.css';

function App() {
  return (
    <AuthContextProvider>
      <PagePicker />
    </AuthContextProvider>
  );
}

export default App;
