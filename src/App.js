import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom'

import RouteWrapper from 'helpers/RouteWrapper';
import Nav from 'components/Nav';
import GameRoom from 'components/GameRoom';
import GameRoomForm from 'components/GameRoomForm';
import { createRoom, enterRoom , playerReadyAction, startGameAction, sendGameEventAction } from 'actions';
import * as types from 'actions/types';

const MAX_NUM_PLAYERS = 2;

// testing purposes
import GameMap from 'components/GameMap';
import styles from 'styles/GameRoom';
// end testing purposes

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // this.props.gameStatus = true;
        let _this = this;
        if (true) {
            document.addEventListener('keyup', function(event) {
                if (event.defaultPrevented) {
                    return;
                }
                let key = event.key || event.keyCode;
                let letterRegex = RegExp(/[a-z]/i);

                if (key.length == 1 && letterRegex.test(key)) {
                    console.log("Letter!", key);
                    // _this.props.sendGameEvent({
                    //     type: types.KEY_PRESS,
                    //     key: key
                    // })
                }
                event.preventDefault();

                // switch (event.key) {
                //     case "Down": // IE specific value
                //     case "ArrowDown":
                //         // Do something for "down arrow" key press.
                //     case "Up": // IE specific value
                //     case "ArrowUp":
                //         // Do something for "up arrow" key press.
                //     case "Left": // IE specific value
                //     case "ArrowLeft":
                //         // Do something for "left arrow" key press.
                //     case "Right": // IE specific value
                //     case "ArrowRight":
                //         // Do something for "right arrow" key press.
                //     case "Enter":
                //         // Do something for "enter" or "return" key press.
                //     case "Escape":
                //         // Do something for "esc" key press.
                //         break;
                    
                //     default:
                //         return; // Quit when this doesn't handle the key event.
                // }
            });
        }

        return (
            <div>
                <Nav />
                <Switch>
                    <RouteWrapper exact path="/" component={GameRoomForm} 
                        createRoom={this.props.createRoom}
                        enterRoom={this.props.enterRoom}
                    />
                    <RouteWrapper path="/gameroom" component={GameRoom}
                        loading={this.props.loading}
                        roomId={this.props.roomId} 
                        clientId={this.props.clientId} 
                        players={this.props.players} 
                        playerReady={this.props.playerReady}
                        readyStatus={this.props.readyStatus}
                        playerStatuses={this.props.playerStatuses}
                        startFlag={this.props.startFlag}
                        startGame={this.props.startGame}
                        gameStatus={this.props.gameStatus}
                        bases={this.props.bases}
                        roomSize={MAX_NUM_PLAYERS}
                    />
                </Switch>
                {/* testing purposes */}
                <div className={styles.Display}>
                    <GameMap
                        bases={this.props.bases}
                    />
                </div>
                {/* end testing purposes */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("State change", state);
    return {
        loading: state.game.loading,
        roomId: state.game.roomId,
        clientId: state.game.clientId,
        players: state.game.players,
        readyStatus: state.game.readyStatus,
        playerStatuses: state.game.playerStatuses,
        startFlag: state.game.startFlag,
        gameStatus: state.game.gameStatus,
        location: state.router.location,
        roomNumber: state.game.roomNumber,
        bases: state.game.bases
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createRoom: state => {
            dispatch(createRoom(state.username));
        },
        enterRoom: state => {
            dispatch(enterRoom(state.username, state.roomId))
        },
        playerReady: readyFlag => {
            console.log("Player ready action dispatched!", playerReadyAction(readyFlag));
            dispatch(playerReadyAction(readyFlag))
        },
        startGame: () => {
            dispatch(startGameAction());
        },
        sendGameEvent: (action) => {
            console.log("dispatcher", action);
            dispatch(sendGameEventAction(action));
        },
    }
}

const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))

// const AppContainer =connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)

export default AppContainer;

