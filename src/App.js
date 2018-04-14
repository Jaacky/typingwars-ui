import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import GameRoomForm from 'components/GameRoomForm';
import { createGameRoom } from 'actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GameRoomForm 
                    createGameRoom={this.props.createGameRoom}
                    enterRoom={this.props.enterRoom}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        room: state.room
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGameRoom: () => {
            dispatch(createGameRoom());
        },
        enterRoom: state => {
            alert("Game room entered! " + state.room);
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer;

