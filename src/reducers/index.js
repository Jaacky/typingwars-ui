import { combineReducers } from 'redux';
import { routerReducer, push } from 'react-router-redux';

import * as types from 'actions/types';

import { createGameSocket } from 'sockets';

/*
    {
        game: {
            gameId,
            nickname:
            players:
        }
    }
*/

const game = (state = {}, action) => {
    let loading;
    let roomId, clientId, players, readyStatus, startFlag, gameStatus;
    // readyStatus should be useless
    let playerStatuses;
    let bases;
    switch (action.type) {
        case types.ENTERED_ROOM:
            console.log("Entered game room, reducer handling", action);
            clientId = action.clientId;
            loading = action.loading;
            return { ...state, clientId, loading };
        case types.UPDATE_ROOM:
            console.log("UPDATE ROOM ACTION")
            loading = action.loading;
            roomId = action.roomId;
            players = action.players;
            // readyStatus = action.readyStatus
            playerStatuses = action.playerStatuses
            return { ...state, loading, roomId, players, playerStatuses };
        case types.NEW_PLAYER_JOINED: // Action propagated directly from socket - hence need to access data field in action
            console.log("New player joined reducer handling", action);
            players = action.data.players;
            readyStatus = action.data.readyStatus
            return { ...state, players, readyStatus };
        case types.OTHER_PLAYERS_READY:
            console.log("OTHER PLAYER READY reducer");
            readyStatus = action.data.readyStatus;
            startFlag = action.data.startFlag;
            // let readyStatus = { ...state.readyStatus };
            // readyStatus[action.data.playerID] = action.data.readyFlag;
            return {...state, readyStatus, startFlag }
        case types.GAME_BEGIN:
            console.log("GAME BEGIN MSG", action.data);
            gameStatus = true;
            bases = action.data.Bases;
            return {...state, gameStatus, bases}
        default:
            return state;
    }
};

const reducers = combineReducers({
    game,
    router: routerReducer,
});

export default reducers;