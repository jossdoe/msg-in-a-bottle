import React, { createContext, useReducer } from 'react';
import initialState from './state';
import apiReducer from './reducer';

export const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  return (
    <APIContext.Provider value={{ state, dispatch }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
