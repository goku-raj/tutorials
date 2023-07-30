import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './Header';
import Input from './component/Input';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header/>
  <Input />
  </React.StrictMode>
);

