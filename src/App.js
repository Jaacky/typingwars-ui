import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom'

import RouteWrapper from 'helpers/RouteWrapper';
import Nav from 'components/Nav';
import GameRoom from 'components/GameRoom';
import GameRoomForm from 'components/GameRoomForm';
import { createGameRoom, enterGameRoom , playerReadyAction } from 'actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <RouteWrapper exact path="/" 
                        component={GameRoomForm} 
                        createGameRoom={this.props.createGameRoom}
                        enterRoom={this.props.enterRoom}
                    />
                    <RouteWrapper path="/gameroom" component={GameRoom} 
                        gameId={this.props.gameId} 
                        playerID={this.props.playerID} 
                        players={this.props.players} 
                        playerReady={this.props.playerReady}
                        readyStatus={this.props.readyStatus}
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("State change", state);
    return {
        gameId: state.game.gameId,
        playerID: state.game.playerID,
        players: state.game.players,
        readyStatus: state.game.readyStatus,
        location: state.router.location,
        roomNumber: state.game.roomNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGameRoom: state => {
            dispatch(createGameRoom(state.nickname));
        },
        enterRoom: state => {
            dispatch(enterGameRoom(state.nickname, state.gameId))
        },
        playerReady: readyFlag => {
            console.log("Player ready action dispatched!", playerReadyAction(readyFlag));
            dispatch(playerReadyAction(readyFlag))
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

