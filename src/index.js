import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import UserAuthContextProvider from "./components/Contexts/UserAuthContext.js";



render(
  <React.StrictMode>
    <UserAuthContextProvider><App /></UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
