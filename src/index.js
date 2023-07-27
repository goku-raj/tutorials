import React from 'react';
import ReactDOM from 'react-dom/client';
import MultipleReturn from './MultipleReturn';
import Memo from './Memo';
import UseMemo from './UseMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UseMemo/>
  </React.StrictMode>
);

