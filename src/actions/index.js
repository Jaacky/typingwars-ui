import * as types from './types';

export const createGameRoom = (nickname) => {
    return {
        type: types.CREATE_GAME_ROOM,
        nickname,
    }
}

export const enterGameRoom = (nickname, gameId) => {
    return {
        type: types.ENTER_GAME_ROOM,
        nickname,
        gameId
    }
}

export const enteredRoom = (roomID, playerID, players) => {
    return {
        type: types.ENTERED_ROOM,
        roomID,
        playerID,
        players
    }
}

export const playerReadyAction = (readyFlag) => {
    return messageToServerWrapper({
        type: types.PLAYER_READY,
        data: { readyFlag }
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
