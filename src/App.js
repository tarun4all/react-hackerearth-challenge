import React, {useState, useEffect, useContext, useReducer} from 'react';
import { StateProvider, store } from './context-redux/store';
import Navigation from './router';
import './App.css';

function Test() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  return(
    <div>
      <Navigation />
    </div>
  )
}

function App() {
  return (
    <StateProvider>
      <Navigation />
    </StateProvider>
  );
}

export default App;
