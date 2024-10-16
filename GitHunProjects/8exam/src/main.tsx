import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import keypadReducer from './store/keypad.store.ts';
import App from './App.tsx';
import './index.css';

const store = configureStore({ reducer: keypadReducer });

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
