import React, { createContext, useReducer } from 'react';
import initialState from './state';
import apiReducer from './reducer';

export const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  function sendMessage(content) {
    // set is loading
    // call api
    // state call success (code/link, isloading)
    // state call error (errorstate, isloading)
  }

  function readMessage(id) {
    // set is loading
    // call api
    // state call success (content, is loading)
    // state call error (errorstate, is loading)
  }

  function destroyMessage() {
    // reset state + state for showing destroyed-message
  }

  return (
    <APIContext.Provider value={{ state, dispatch }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
