import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom'

import RouteWrapper from 'helpers/RouteWrapper';
import Nav from 'components/Nav';
import GameRoom from 'components/GameRoom';
import GameRoomForm from 'components/GameRoomForm';
import { createGameRoom, enterGameRoom } from 'actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log("app", this.props);
        return (
            <div>
                <Nav />
                <Switch>
                    <RouteWrapper exact path="/" 
                        component={GameRoomForm} 
                        createGameRoom={this.props.createGameRoom}
                        enterRoom={this.props.enterRoom}
                    />
                    <RouteWrapper path="/hello" component={GameRoom} gameId="hello"/>
                    <RouteWrapper path="/hello/world" component={GameRoom} gameId="helloworld"/>
                    <RouteWrapper path="/gameroom" component={GameRoom} gameId={this.props.gameId} nickname={this.props.nickname} />
                </Switch>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        nickname: state.game.nickname,
        gameId: state.game.gameId,
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
            console.log(state);
            // console.log("action", enterGameRoom(state.nickname, state.roomNumber));
            dispatch(enterGameRoom(state.nickname, state.gameId))
        }
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

