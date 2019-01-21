import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import 'font-awesome/css/font-awesome.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

window.jQuery = jquery;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
