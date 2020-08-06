import React, { createContext, useReducer } from 'react';
import initialState from './state';
import apiReducer from './reducer';

export const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  function sendMessage(text) {
    dispatch({ type: 'POST_START' });

    fetch('https://file.io', {
      body: `text=${text}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'POST_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'POST_ERROR', payload: error });
      });
  }

  function readMessage(id) {
    dispatch({ type: 'GET_START' });

    fetch(`https://file.io/${id}`)
      .then((response) => {
        dispatch({ type: 'GET_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'GET_ERROR', payload: error });
      });
  }

  function destroyMessage() {
    dispatch({ type: 'DESTROY_MESSAGE' });
  }

  return (
    <APIContext.Provider
      value={{ state, sendMessage, readMessage, destroyMessage }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
