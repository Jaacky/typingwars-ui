import "regenerator-runtime/runtime"; // only for webpack dev server babel runtime https://github.com/redux-saga/redux-saga/issues/280
import { take, call, put, takeEvery, takeLatest, all, race } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { push } from 'react-router-redux';

import * as types from 'actions/types';
import * as actions from 'actions';

import { createGameRoomSocket, enterGameRoomSocket } from 'sockets';

// function* createGameRoom(action) {
//     let socket = yield call(createGameRoomSocket, action.nickname);
//     while (true) {
//         console.log("before yielding take socket channel");
//         const action = yield take(socket);
//         console.log("after yielding socket channel socket", action);
//         yield put(action);
//     }
// }

// function* watchCreateGameRoom() {
//     yield takeEvery(types.CREATE_GAME_ROOM, createGameRoom);
// }

function watchIncomingMessages(socket) {
    return eventChannel(emit => {
        socket.onmessage = function(event) {
            console.log("on message", event);
            let res = JSON.parse(event.data);
            console.log(res);
            return emit({ type: res.MessageType, data: res.Data });
        }

        socket.onclose = function(event) {
            alert("ws connection closed");
        };

        // Unsubscribe function - should close socket
        return () => {
            socket.close();
            console.log('Socket off');
        };
    });
}

function* propagteIncomingMessages(socketChannel) {
    while (true) {
        console.log("before yielding take socket channel");
        const action = yield take(socketChannel);
        console.log("after yielding socket channel socket", action);
        yield put(action);
    }
}

function* sendOutgoingMessages(socket) {
    while (true) {
        const action = yield take(types.MESSAGE_TO_SERVER);
        socket.send(action);
    }
}

function* createGameRoomHandler() {
    while (true) {
        const action = yield take(types.CREATE_GAME_ROOM);
        const socket = new WebSocket("ws://localhost:8080/ws");

        socket.onopen = (event) => {
            console.log("create game socket connection USING CHANNEL established", event);
            let msg = {
                MessageType: types.CREATE_GAME_ROOM,
                Data: {
                    nickname: action.nickname
                }
            };
            socket.send(JSON.stringify(msg));
        }

        const socketChannel = yield call(watchIncomingMessages, socket);

        const { cancel } = yield race({
            task: all([
                call(propagteIncomingMessages, socketChannel),
                call(sendOutgoingMessages, socket)
            ]),
            cancel: take("STOP_WEBSOCKET")
        });

        if (cancel) {
            // console.log('channel cancelled');
            socketChannel.close();
        }
    }
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

function* playerReady(action) {
    console.log("Player ready toggle", action.readyFlag);
}

function* watchPlayerReady() {
    yield takeLatest(types.PLAYER_READY, playerReady);
}

export default function* rootSaga() {
    yield all([
        // watchCreateGameRoom(),
        createGameRoomHandler(),
        watchEnterGameRoom(),
        watchSuccessfulGameRoomCreation(),
        watchSuccessfulGameRoomEnter(),
        watchPlayerReady(),

    ])
};
