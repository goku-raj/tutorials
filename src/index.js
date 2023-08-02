import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './Header';
import Input from './component/Input';
import MultipleReturnsFetchData from './component/UseState';
import UserChallenge from './component/UserChallenge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <UserChallenge />
  
  </React.StrictMode>
);

