import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from "App";
import configureStore from 'store';
import sagas from 'sagas';
import * as actions from 'actions';
import * as types from 'actions/types';

import currencies from 'currencies';

import setupSocket, { createGameSocket } from 'sockets';

let store = configureStore();
store.runSaga(sagas);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("app")
);