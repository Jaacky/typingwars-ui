import "regenerator-runtime/runtime"; // only for webpack dev server babel runtime https://github.com/redux-saga/redux-saga/issues/280
import { take, call, put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';

import * as types from 'actions/types';
import * as actions from 'actions';

import { createGameRoomSocket, enterGameRoomSocket } from 'sockets';

function* createGameRoom(action) {
    let socket = yield call(createGameRoomSocket, action.nickname);
    while (true) {
        console.log("before yielding take socket channel");
        const action = yield take(socket);
        console.log("after yielding socket channel socket", action);
        yield put(action);
    }
}

function* watchCreateGameRoom() {
    yield takeEvery(types.CREATE_GAME_ROOM, createGameRoom);
}

function* enterGameRoom(action) {
    console.log("enter game room actino", action)
    let socket = yield call(enterGameRoomSocket, {nickname: action.nickname, gameId: action.gameId})
    yield put(push('/gameroom'))

    while (true) {
        const action = yield take(socket);
        yield put(action);
    }
}

function* watchEnterGameRoom() {
    yield takeEvery(types.ENTER_GAME_ROOM, enterGameRoom);
}

function* redirectToGameRoom(action) {
    console.log("Redirecting to game room", action);
    yield put(actions.enteredRoom(action.data.roomID, action.data.playerID, action.data.players));
    yield put(push('/gameroom'));
}

function* watchSuccessfulGameRoomCreation() {
    yield takeEvery(types.CREATE_GAME_ROOM_SUCCESS, redirectToGameRoom);
}

function* watchSuccessfulGameRoomEnter() {
    yield takeEvery(types.ENTER_GAME_ROOM_SUCCESS, redirectToGameRoom);
}

export default function* rootSaga() {
    yield all([
        watchCreateGameRoom(),
        watchEnterGameRoom(),
        watchSuccessfulGameRoomCreation(),
        watchSuccessfulGameRoomEnter(),
    ])
};
