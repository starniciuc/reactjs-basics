/*
import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import Home from './components/home';
import User from './components/user';
import Root from './components/root';

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <Root>
                    <Route exact path='/home' component={Home} />
                    <Route path='/user/:id' component={User} />
                </Root>
            </HashRouter>
        );
    }
}

render(<App />, window.document.getElementById('app'));*/

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger  } from "redux-logger";

const initialMathState = {
    result: 1,
    lastValues: []
}
const initialUserState = {
    name: 'Anna',
    age: '27'
}

const mathReducer = (state = initialMathState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    //console.log("Action: ", action);
    next(action);
};

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger, createLogger ()));

store.subscribe(() => {
    //console.log("Updated", store.getState());
});

store.dispatch({type: "ADD", payload: 20});
store.dispatch({type: "SUBTRACT", payload: 2});
store.dispatch({type: "ADD", payload: 33});
store.dispatch({type: "SET_NAME", payload: "Maria"});
store.dispatch({type: "SET_AGE", payload: "35"});