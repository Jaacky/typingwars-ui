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