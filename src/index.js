import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("root"))