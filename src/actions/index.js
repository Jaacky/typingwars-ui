import * as types from './types';

export const createGameRoom = (nickname) => {
    return {
        type: types.CREATE_GAME_ROOM,
        nickname,
    }
}

export const enterGameRoom = (nickname, roomNumber) => {
    return {
        type: types.ENTER_GAME_ROOM,
        nickname,
        roomNumber
    }
}