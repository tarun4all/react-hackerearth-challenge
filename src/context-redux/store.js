import React, {createContext, useReducer} from 'react';
import {call, dataFilter} from '../services/dataManage';

const initialState = {apiData: null, 
    filterData: null, 
    filterType: {}, 
    brand: [], 
    country: [], 
    style: [], 
    star: ['1', '2', '3', '4', '5'], 
    variety: []
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'apiCall':
        const apiData = call();
        const {brand, country, style, variety} = dataFilter(apiData)
        return { ...state, apiData: call(), brand, country, style, variety }
      default:
        return { ...state, apiData: '', error: 'Some Error Happens' };
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }