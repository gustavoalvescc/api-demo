import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import './styles/style.scss';
import {BrowserRouter} from 'react-router-dom';
import {Store} from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={Store}><BrowserRouter><App /></BrowserRouter></ Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
