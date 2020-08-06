import initialState from './state';

function apiReducer(state, action) {
  switch (action.type) {
    case 'POST_START':
      return { ...state, isLoading: true, postError: null, postResponse: {} };

    case 'POST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        postError: null,
        postResponse: action.payload
      };

    case 'POST_ERROR':
      return { ...state, isLoading: false, postError: action.payload };

    case 'GET_START':
      return { ...state, isLoading: true, getError: null, getResponse: {} };

    case 'GET_SUCCESS':
      return {
        ...state,
        isLoading: false,
        getError: null,
        getResponse: action.payload
      };

    case 'GET_ERROR':
      return { ...state, isLoading: false, getError: action.payload };

    case 'DESTROY_MESSAGE':
      return { ...initialState, messageDestroyed: true };

    default:
      return { ...state };
  }
}

export default apiReducer;
