import React, { createContext, useState } from 'react';

export const PageContext = createContext();

function PageContextProvider(props) {
  const [page, setPage] = useState('Home');
  const context = { page, setPage }

  return (
    <PageContext.Provider value={context}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageContextProvider;