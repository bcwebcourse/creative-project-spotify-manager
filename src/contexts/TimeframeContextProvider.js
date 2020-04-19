import React, { createContext, useState } from 'react';

export const TimeframeContext = createContext();

function TimeframeContextProvider(props) {
  const [timeframe, setTimeframe] = useState('Home');
  const [timeframeReadable, setTimeframeReadable] = useState('Month');
  
  const context = {
    timeframe, setTimeframe,
    timeframeReadable, setTimeframeReadable
  }

  return (
    <TimeframeContext.Provider value={context}>
      {props.children}
    </TimeframeContext.Provider>
  );
}

export default TimeframeContextProvider;