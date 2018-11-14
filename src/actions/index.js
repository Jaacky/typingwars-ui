import * as types from './types';

export const createRoom = (username) => {
    return {
        type: types.CREATE_GAME_ROOM,
        username,
    }
}

export const enterRoom = (username, roomId) => {
    return {
        type: types.ENTER_ROOM,
        username,
        roomId
    }
}

export const enteredRoom = (data) => {
    return {
        type: types.ENTERED_ROOM,
        loading: true,
        ...data
    }
}

export const updateRoom = (data) => {
    return {
        type: types.UPDATE_ROOM,
        loading: false,
        ...data
    }
}

export const startGame = (data) => {
    console.log("Start game action");
    return {
        type: types.START_GAME,
        ...data
    }
}

export const updateSpace = (data) => {
    return {
        type: types.SPACE_UPDATE,
        space: data
    }
}

export const playerReadyAction = (readyFlag) => {
    return messageToServerWrapper({
        type: types.PLAYER_READY,
        data: { readyFlag }
    })
}

export const startGameAction = () => {
    console.log("start game action firing")
    return messageToServerWrapper({
        type: types.START_GAME
    })
}

export const sendUserAction = (key) => {
    // console.log("sendUserAction - key: ", key);
    return messageToServerWrapper({
        type: types.USER_ACTION,
        data: key
    })
}

const messageToServerWrapper = (message) => {
    return {
        type: types.MESSAGE_TO_SERVER,
        data: message
    }
}

export const socketClosed = () => {
    return {
        type: types.SOCKET_CLOSED
    }
}
