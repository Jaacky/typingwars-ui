import "regenerator-runtime/runtime"; // only for webpack dev server babel runtime https://github.com/redux-saga/redux-saga/issues/280
import { take, call, put, takeEvery, takeLatest, all, race } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { push } from 'react-router-redux';

import * as types from 'actions/types';
import * as actions from 'actions';

const websocketPath = "ws://localhost:8080/ws";

function watchIncomingMessages(socket) {
    return eventChannel(emit => {
        socket.onmessage = function(event) {
            console.log("on message", event);
            let res = JSON.parse(event.data);
            console.log(res);
            return emit({ type: res.MessageType, data: res.Data });
        }

        socket.onclose = function(event) {
            console.log("ws connection closed");
            return emit(actions.socketClosed());
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
        console.log("Sending out going messages", createServerMessage(action.data.type, action.data.data));
        socket.send(JSON.stringify(createServerMessage(action.data.type, action.data.data)));
    }
}

const createServerMessage = (type, data) => {
    return {
        MessageType: type,
        Data: data
    };
}

function* createGameRoomHandler() {
    while (true) {
        const action = yield take(types.CREATE_GAME_ROOM);
        const socket = new WebSocket(websocketPath);

        socket.onopen = (event) => {
            console.log("create game socket connection USING CHANNEL established", event);
            let payload = { nickname: action.nickname };
            socket.send(JSON.stringify(createServerMessage(types.CREATE_GAME_ROOM, payload)));
        }

        const socketChannel = yield call(watchIncomingMessages, socket);

        const { cancel } = yield race({
            task: all([
                call(propagteIncomingMessages, socketChannel),
                call(sendOutgoingMessages, socket)
            ]),
            cancel: take(types.SOCKET_CLOSED)
        });

        if (cancel) {
            console.log('channel cancelled');
            socketChannel.close();
            yield put(push('/'));
        }
    }
}

function* enterGameRoomHandler() {
    while (true) {
        const action = yield take(types.ENTER_GAME_ROOM);
        const socket = new WebSocket(websocketPath);

        socket.onopen = (event) => {
            console.log("Enter game using channel");
            let payload = { nickname: action.nickname, gameId: action.gameId };
            socket.send(JSON.stringify(createServerMessage(types.ENTER_GAME_ROOM, payload)));
        }

        const socketChannel = yield call(watchIncomingMessages, socket);

        const { cancel } = yield race({
            task: all([
                call(propagteIncomingMessages, socketChannel),
                call(sendOutgoingMessages, socket)
            ]),
            cancel: take(types.SOCKET_CLOSED)
        });

        if (cancel) {
            console.log('channel cancelled');
            socketChannel.close();
            yield put(push('/'));
        }

    }
}

function* redirectToGameRoom(action) {
    console.log("Redirecting to game room", action);
    // yield put(actions.enteredRoom(action.data.roomID, action.data.playerID, action.data.players));
    yield put(actions.enteredRoom(action.data));
    yield put(push('/gameroom'));
}

function* watchSuccessfulGameRoomCreation() {
    yield takeEvery(types.CREATE_GAME_ROOM_SUCCESS, redirectToGameRoom);
}

function* watchSuccessfulGameRoomEnter() {
    yield takeEvery(types.ENTER_GAME_ROOM_SUCCESS, redirectToGameRoom);
}

// function* otherPlayersReady(action) {
//     console.log("Other player ready toggle", action);

// }

// function* watchOtherPlayersReady() {
//     yield takeLatest(types.OTHER_PLAYERS_READY, otherPlayersReady);
// }

export default function* rootSaga() {
    yield all([
        createGameRoomHandler(),
        enterGameRoomHandler(),
        watchSuccessfulGameRoomCreation(),
        watchSuccessfulGameRoomEnter(),
        // watchOtherPlayersReady(),
    ])
};
