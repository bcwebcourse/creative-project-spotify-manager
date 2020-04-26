import React, { useContext } from 'react';
import Home from './Home';
import TopSongs from './TopSongs';
import NotAuthenticated from './NotAuthenticated';
import { AuthContext } from '../contexts/AuthContextProvider';
import { PageContext } from '../contexts/PageContextProvider';
import PlaylistChart from './PlaylistChart';

function PagePicker() {
  const { userIsAuthenticated } = useContext(AuthContext);
  const { page } = useContext(PageContext);
  console.log(page);
  if (!userIsAuthenticated())
    return <NotAuthenticated />
  if (page.startsWith('Playlist')){
    return <PlaylistChart />
  }
  switch (page) {
    case 'Home':
      return <Home />;      
    case 'TopSongs-short_term':
      return <TopSongs timeframe={'short_term'} timeframeReadable={'Month'}/>;
    case 'TopSongs-medium_term':
      return <TopSongs timeframe={'medium_term'} timeframeReadable={'Six Months'}/>;
    case 'TopSongs-long_term':
      return <TopSongs timeframe={'long_term'} timeframeReadable={'All Time'}/>;
    default:
      console.log("no");
      return <Home />;
  }
}

export default PagePicker;
