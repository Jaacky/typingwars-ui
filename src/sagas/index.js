import "regenerator-runtime/runtime"; // only for webpack dev server babel runtime https://github.com/redux-saga/redux-saga/issues/280
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';

import * as types from 'actions/types';

import { createGameSocket } from 'sockets';

// function* fetchPrice(action) {
//     console.log("fetch price");
//     let coin = "Ethereum";
//     const data = yield fetch(`https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=CAD`)
//         .then(response => response.json());
//     yield put({ type: 'FETCH_PRICE_SUCCESS', data: data[0] })
// }

// function* watchFetchPrice() {
//     console.log("watch fetch price");
//     yield takeEvery('FETCH_PRICE', fetchPrice);
// }

function* createGameRoom(action) {
    // console.log("Create game room saga");
    // let socket = createGameSocket();
    // yield put({ type: types.CREATE_GAME_ROOM_SUCCESS, socket: socket })
    let gameId = '123GA'
    yield put(push('/gameroom/' + gameId));
    yield put({ type: types.CREATE_GAME_ROOM_SUCCESS, gameId })
}

function* watchCreateGameRoom() {
    yield takeEvery(types.CREATE_GAME_ROOM, createGameRoom);
}

function *enterGameRoom(action) {
    let gameId = '123GA';
    yield put(push('/gameroom/' + gameId));
    yield put({ type: types.ENTER_GAME_ROOM_SUCCESS, gameId })
}

function* watchEnterGameRoom() {
    yield takeEvery(types.ENTER_GAME_ROOM, enterGameRoom);
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
        watchCreateGameRoom(),
        watchEnterGameRoom(),
        // watchCreateGameRoomSocket(),
    ])
};
