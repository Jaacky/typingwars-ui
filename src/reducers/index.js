import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as types from 'actions/types';

import { createGameSocket } from 'sockets';

const game = (state = {}, action) => {
    switch (action.type) {
        // case types.CREATE_GAME_ROOM:
        //     let socket = createGameSocket();
        //     return [socket];
        case types.CREATE_GAME_ROOM_SUCCESS:
            // console.log("Successful game room creation reducer handling");
            return { gameId: action.gameId, nickname: action.nickname, ...state };
        case types.ENTER_GAME_ROOM_SUCCESS:
            // console.log("Entered game room, reducer handling", action);
            return { gameId : action.gameId, nickname: action.nickname, ...state };
        default:
            return state;
    }
};

const reducers = combineReducers({
    game,
    router: routerReducer,
});

export default reducers;