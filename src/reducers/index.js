import { combineReducers } from 'redux';
import { routerReducer, push } from 'react-router-redux';

import * as types from 'actions/types';

import { createGameSocket } from 'sockets';

const game = (state = {}, action) => {
    switch (action.type) {
        // case types.CREATE_GAME_ROOM:
        //     let socket = createGameSocket();
        //     return [socket];
        case types.CREATE_GAME_ROOM_SUCCESS:
            console.log("Successful game room creation reducer handling", action);
            return { gameId: action.data.id, nickname: action.data.nickname, ...state };
        case types.ENTER_GAME_ROOM_SUCCESS:
            console.log("Entered game room, reducer handling", action);
            return { gameId : action.data.id, nickname: action.data.nickname, ...state };
        case 'socket_message':
            console.log("ACTION SOCKET_MESSAGE TYPE SENT");
            return state;
        default:
            return state;
    }
};

const socketMessages = (state = {}, action) => {
    switch(action.type) {
        case types.SOCKET_MESSAGE:
            msg = action.message
            switch(msg.MessageType) {
                case types.CREATE_GAME_ROOM_SUCCESS:
                    return { gameId: msg.Data.id, ...state };
                default:
                    return state
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    game,
    router: routerReducer,
});

export default reducers;