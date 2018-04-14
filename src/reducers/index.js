import { combineReducers } from 'redux';

import * as types from 'actions/types';

import { createGameSocket } from 'sockets';

const game = (state = [], action) => {
    switch (action.type) {
        case types.CREATE_GAME_ROOM:
            let socket = createGameSocket();
            return [socket];
        default:
            return state;
    }
};

const reducers = combineReducers({
    game,
});

export default reducers;