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
    let gameId, playerID, players, readyStatus;
    switch (action.type) {
        case types.ENTERED_ROOM:
            console.log("Entered game room, reducer handling", action);
            gameId = action.roomID;
            playerID = action.playerID;
            players = action.players;
            // readyStatus = players.reduce((status, player) => {
            //     console.log("oplayer id:", typeof(player.id));
            //     status[player.id] = false;
            //     return status;
            // }, {});
            readyStatus = action.readyStatus
            return { ...state, gameId, playerID, players, readyStatus };
        case types.NEW_PLAYER_JOINED:
            console.log("New player joined reducer handling", action);
            players = action.data.players;
            // readyStatus = players.reduce((status, player) => {
            //     status[player.id] = false;
            //     return status;
            // }, {});
            readyStatus = action.data.readyStatus
            return { ...state, players, readyStatus };
        case types.OTHER_PLAYERS_READY:
            console.log("OTHER PLAYER READY reducer");
            readyStatus = action.readyStatus
            // let readyStatus = { ...state.readyStatus };
            // readyStatus[action.data.playerID] = action.data.readyFlag;
            return {...state, readyStatus }
        // case 'socket_message':
        //     console.log("ACTION SOCKET_MESSAGE TYPE SENT");
        //     return state;
        default:
            return state;
    }
};

// const socketMessages = (state = {}, action) => {
//     switch(action.type) {
//         case types.SOCKET_MESSAGE:
//             msg = action.message
//             switch(msg.MessageType) {
//                 case types.CREATE_GAME_ROOM_SUCCESS:
//                     console.log("Created game room success socket message");
//                     return { gameId: msg.Data.id, ...state };
//                 default:
//                     return state
//             }
//         default:
//             return state;
//     }
// }

const reducers = combineReducers({
    game,
    router: routerReducer,
});

export default reducers;