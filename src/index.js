import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Function from './Function';
import Car from './Car';
import Parent from './Parent';
import ClassDemo from './ClassDemo';
import Material from './Material';
import Signin from './Signin';
import Signup from './Signup';
import Dashboard from './Dashboard';
import CC1Q1 from './CC1Q1';
import CC1Q10 from './CC1Q10';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <CC1Q1/>
    <CC1Q10 name='SKCET' count='25' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
