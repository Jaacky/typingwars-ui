import { eventChannel } from 'redux-saga';
import * as types from 'actions/types';

export function createGameSocket() {
    console.log('creating game socket');
    const socket = new WebSocket("ws://localhost:8080/ws")
    
    socket.onopen = function(event) {
        console.log("create game socket connection established", event);
        let msg = {
            messageType: "Registration",
            data: {
                id: Math.random() * 100,
                name: "Clientsecond"
            }
        };
        socket.send(JSON.stringify(msg));
    };
    socket.onclose = function(event) {
        alert("ws connection closed");
    };
    socket.onmessage = function(event) {
        console.log(event);
        console.log(event.data);
    }

    return socket;
}

export function createSocketChannel(nickname, onOpenHandler) {
    return eventChannel(emit => {
        const socket = new WebSocket("ws://localhost:8080/ws");

        socket.onopen = onOpenHandler(socket);

        socket.onclose = function(event) {
            alert("ws connection closed");
        };
        socket.onmessage = function(event) {
            console.log("on message", event);
            let res = JSON.parse(event.data);
            console.log(res);
            return emit({ type: res.MessageType, data: res.Data });
        }

        // Unsubscribe function - should close socket
        return () => {
            console.log('Socket off');
        }
    })
}

export function createGameRoomSocket(nickname) {
    let onOpenHandler = function(socket) {
            // socket.onopen function
            return function(event) {
                console.log("create game socket connection USING CHANNEL established", event);
                let msg = {
                    MessageType: types.CREATE_GAME_ROOM,
                    Data: {
                        nickname
                    }
                };
                socket.send(JSON.stringify(msg));
            }
        }
    return createSocketChannel(nickname, onOpenHandler);
}

export function enterGameRoomSocket({nickname, gameId}) {
    console.log("Socket parameters:", nickname, gameId);
    let onOpenHandler = function(socket) {
        // socket.onopen function
        return function(event) {
            console.log("enter game socket connection USING CHANNEL established", event);
            let msg = {
                MessageType: types.ENTER_GAME_ROOM,
                Data: {
                    nickname,
                    gameId
                }
            };
            socket.send(JSON.stringify(msg));
        }
    }
    return createSocketChannel(nickname, onOpenHandler);
}

// function initWebsocket() {
//     return eventChannel(emitter => {
//       ws = new WebSocket(wsUrl + '/client')
//       ws.onopen = () => {
//         console.log('opening...')
//         ws.send('hello server')
//       }
//       ws.onerror = (error) => {
//         console.log('WebSocket error ' + error)
//         console.dir(error)
//       }
//       ws.onmessage = (e) => {
//         let msg = null
//         try {
//           msg = JSON.parse(e.data)
//         } catch(e) {
//           console.error(`Error parsing : ${e.data}`)
//         }
//         if (msg) {
//           const { payload: book } = msg
//           const channel = msg.channel
//           switch (channel) {
//             case 'ADD_BOOK':
//               return emitter({ type: ADD_BOOK, book })
//             case 'REMOVE_BOOK':
//               return emitter({ type: REMOVE_BOOK, book })
//             default:
//               // nothing to do
//           }
//         }
//       }
//       // unsubscribe function
//       return () => {
//         console.log('Socket off')
//       }
//     })
//   }