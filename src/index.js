import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


import { Reducer } from './reducer';
import { App } from './App';


const rootElement = document.getElementById('root');
const reducer = Reducer();


export const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    rootElement
);
