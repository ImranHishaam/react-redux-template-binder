import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Reducers/index';
import IndexAction from './Actions/IndexAction';

export default class HelloWord extends Component {
    render() {
        return (
            <Provider store={store}>
                <IndexAction />
            </Provider>
        );
    }
}