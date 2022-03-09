import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
  const [state, setState] = useState(1);

  return (
    <MainContext.Provider value={[state, setState]}>
      {children}
    </MainContext.Provider>
  );
};

export default Context;
