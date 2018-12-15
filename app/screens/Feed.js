/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, AsyncStorage} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Add from './Add'

//type Props = {};
export default class Feed extends Component<Props> {

    static navigationOptions = {
        title: 'Todo!',
        headerStyle: {
            backgroundColor: '#4cd964',
            height: '30%'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 28,
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View >

                <Text >Feed</Text>

            </View>
        );
    }
}
