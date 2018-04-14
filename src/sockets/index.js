export function createGameSocket() {
    console.log('creating game socket');
    const socket = new WebSocket("ws://localhost:8080/ws")
    
    socket.onopen = function(event) {
        console.log("create game socket connection established", event);
        let msg = {
            MessageType: "Registration",
            Data: {
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
        console.log(event.data);
    }

    return socket;
}