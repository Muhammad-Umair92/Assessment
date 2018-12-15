/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Feed from './Feed'
import TabNavigation from '../navigation/TabNavigation'

//type Props = {};
export default class Login extends Component {
    state = {
        'name': ''
    }
    render() {
        return (
            <View style={styles.container}>
                <Image  source={require("../assets/images/logoNormal.png")} />
                <Text style={styles.welcome}>Todo</Text>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="lightgray"
                    style={{height: 48, borderColor: 'lightgray', borderWidth: 1, fontFamily: 'SFProDisplay', marginTop: 185, width: "90%", fontWeight: "500",}}
                    onChangeText={(text) => {this.setState({name: text});  }}
                />
                <TouchableOpacity style={{marginTop: '5%', width: '90%', height: 48, backgroundColor: "#4cd964", justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor:"#4cd964"}}
                                  onPress={() => {this.props.navigation.navigate('TabNavigation'); AsyncStorage.setItem('name', this.state.name);}}
                >
                    <View>
                        <Text style = {{fontSize: 14, color: 'white', justifyContent: 'center', alignSelf: 'center', marginTop: '3%', fontWeight: "500"}}>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 24,
        fontWeight: "500",
        textAlign: 'center',
        margin: 10,
    },

});
