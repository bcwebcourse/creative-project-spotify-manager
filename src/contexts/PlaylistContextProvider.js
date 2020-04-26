import React, { createContext, useState } from 'react';

export const PlaylistContext = createContext();

function PlaylistContextProvider(props) {
  const [playlist, setPlaylist] = useState('Home');
  const context = { playlist, setPlaylist };

  return (
    <PlaylistContext.Provider value={context}>
      {props.children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistContextProvider;