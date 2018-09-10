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

// export const enteredRoom = (roomID, playerID, players) => {
//     return {
//         type: types.ENTERED_ROOM,
//         roomID,
//         playerID,
//         players
//     }
// }

export const enteredRoom = (data) => {
    return {
        type: types.ENTERED_ROOM,  
        ...data
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

export const sendGameEventAction = (action) => {
    console.log("action", action);
    return messageToServerWrapper({
        type: types.GAME_ACTION,
        data: action
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
