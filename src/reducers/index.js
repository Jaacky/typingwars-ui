import { combineReducers } from 'redux';
import { routerReducer, push } from 'react-router-redux';

import * as types from 'actions/types';

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
    let roomId, clientId, players, startFlag, gameStatus;
    let playerStatuses, space;

    switch (action.type) {
        case types.SPACE_UPDATE:
            console.log("Space reducer received", action);
            space = action.space;
            return {...state, space }
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
            playerStatuses = action.playerStatuses
            startFlag = action.startFlag
            return { ...state, loading, roomId, players, playerStatuses, startFlag };
        case types.START_GAME:
            console.log("Start game ack");
            gameStatus = true;
            return { ...state, gameStatus }
        case types.END_GAME:
            gameStatus = false;
            let defeated = action.defeated;
            console.log("END GAME, defeated: ", defeated);
            return { ...state, gameStatus, defeated }
        case types.SOCKET_CLOSED:
            state = {};
            return { ...state };
        default:
            return state;
    }
};

const reducers = combineReducers({
    game,
    router: routerReducer,
});

export default reducers;