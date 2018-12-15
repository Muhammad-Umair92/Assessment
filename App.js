/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Login from './app/screens/Login'
import AppNavigator from './app/navigation/Navigation'
import {store} from './app/redux/createStore'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

