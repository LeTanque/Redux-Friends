import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './styles/css/index.css';

import reducer from './reducers';
import App from './App';




const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    rootElement
);

