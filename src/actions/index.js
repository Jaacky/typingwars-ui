import * as types from './types';

export const createGameRoom = () => {
    return {
        type: types.CREATE_GAME_ROOM,
        test: "plz"
    }
}

export const enterGameRoom = (roomNumber) => {
    return {
        type: types.ENTER_GAME_ROOM,
        roomNumber
    }
}