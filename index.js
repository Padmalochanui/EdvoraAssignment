import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FetchAPIComponent from './Edovora';
import Edvora2 from './Edvora2';
import Api from './Api';
import Sona from './Product';
import Products from './Products';

ReactDOM.render(
  <React.StrictMode>
    {/* <FetchAPIComponent /> */}
    <Products />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
