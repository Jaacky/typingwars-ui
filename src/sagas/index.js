import "regenerator-runtime/runtime"; // only for webpack dev server babel runtime https://github.com/redux-saga/redux-saga/issues/280
import { call, put, takeEvery, all } from 'redux-saga/effects';

import { delay } from 'redux-saga';

import * as types from 'actions/types';

import { createGameSocket } from 'sockets';

function* fetchPrice(action) {
    console.log("fetch price");
    let coin = "Ethereum";
    const data = yield fetch(`https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=CAD`)
        .then(response => response.json());
    yield put({ type: 'FETCH_PRICE_SUCCESS', data: data[0] })
}

function* watchFetchPrice() {
    console.log("watch fetch price");
    yield takeEvery('FETCH_PRICE', fetchPrice);
}

// function* createGameRoomSocket(action) {
//     console.log("Create game room saga");
//     const socket = yield createGameRoomSocket();
//     console.log("after yielding creategameroomsocket", socket);
//     yield put({ type: types.CREATE_GAME_ROOM_SUCCESS });
// }

// function* watchCreateGameRoomSocket() {
//     console.log("watching game socket sga");
//     yield takeEvery(types.CREATE_GAME_ROOM, createGameRoomSocket);
// }

export default function* rootSaga() {
    yield all([
        // watchCreateGameRoomSocket(),
    ])
};
