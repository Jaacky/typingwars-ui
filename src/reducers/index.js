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
    let gameId, playerID, players;
    switch (action.type) {
        // case types.CREATE_GAME_ROOM:
        //     let socket = createGameSocket();
        //     return [socket];
        // case types.CREATE_GAME_ROOM_SUCCESS:
        //     console.log("Successful game room creation reducer handling", action);
        //     gameId = action.data.roomID;
        //     nickname = action.data.nickname;
        //     players = action.data.players;

        //     return { gameId, nickname, players, ...state };
        // case types.ENTER_GAME_ROOM_SUCCESS:
        //     console.log("Entered game room, reducer handling", action);
        //     gameId = action.data.roomID;
        //     nickname = action.data.nickname;
        //     players = action.data.players;

        //     return { gameId, nickname, players, ...state };
        case types.ENTERED_ROOM:
            console.log("Entered game room, reducer handling", action);
            gameId = action.roomID;
            playerID = action.playerID;
            players = action.players;

            return { gameId, playerID, players, ...state };
        case types.NEW_PLAYER_JOINED:
            console.log("New player joined reducer handling");
            return { players: [], ...state };        
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