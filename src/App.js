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
        return (
            <div>
                <Nav />
                {/* <Switch> */}
                
                    <RouteWrapper exact path="/" 
                        component={GameRoomForm} 
                        createGameRoom={this.props.createGameRoom}
                        enterRoom={this.props.enterRoom}
                    />
                    <RouteWrapper path="/hello" component={GameRoom} gameId="hello"/>
                    <RouteWrapper path="/hello/world" component={GameRoom} gameId="helloworld"/>
                    <RouteWrapper path="/gameroom/:test" component={GameRoom} gameId="4576" />
                {/* </Switch> */}
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    return {
        location: state.location,
        roomNumber: state.roomNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGameRoom: () => {
            dispatch(createGameRoom());
        },
        enterRoom: state => {
            dispatch(enterGameRoom(state.roomNumber))
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

