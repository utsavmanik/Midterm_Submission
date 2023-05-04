import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
//import store from './redux/store'
import { Provider } from 'react-redux';
import cartReducer from "./slices/cartSlice";
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});



root.render(

   <React.StrictMode>

    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
