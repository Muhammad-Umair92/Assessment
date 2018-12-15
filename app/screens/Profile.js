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
export default class Profile extends Component<Props> {

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

    clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }

    render() {
        return (
            <View style={{height:'100%', flexDirection:'row', alignItems:'center',justifyContent: 'center'}}>
                <TouchableOpacity style={{width: '90%', height: 48, justifyContent: 'center', alignSelf: 'flex-end', borderRadius: 5, borderWidth: 1, borderColor:"red", marginBottom:'5%'}}
                                  onPress={() => {this.clearAsyncStorage.bind(this); this.props.navigation.navigate('Login')}}
                >
                    <View>
                        <Text style = {{marginTop:'3%',fontSize: 14, color: 'red', justifyContent: 'center', alignSelf: 'center', fontWeight: "500"}}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

