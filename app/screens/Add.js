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
import Login from './Login'
import DatePicker from 'react-native-datepicker';

//type Props = {};
export default class Add extends Component<Props> {

    static navigationOptions = {
        title: 'Add',
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

    state = {
        'name': ''
    }

    datePicker(){

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    multiline={true}
                    placeholder="What do you need to do?"
                    placeholderTextColor="lightgray"
                    style={{marginTop:'5%', justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left', height: 148, borderColor: 'lightgray', borderWidth: 1, fontFamily: 'SFProDisplay', width: "100%"}}
                    onChangeText={(text) => {this.setState({todoItem: text});  }}
                />

                <DatePicker
                    style={{width: '100%', marginTop:'5%'}}
                    date={this.state.date}
                    mode="datetime"
                    placeholder="When it is due?"
                    format="YYYY-MM-DD HH:mm"
                    //minDate="2016-05-01"
                    //maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />

                <TouchableOpacity style={{marginTop: '5%', width: '95%', height: 48, backgroundColor: "#4cd964", justifyContent: 'center', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor:"#4cd964"}}
                                  onPress={() => {AsyncStorage.setItem('todoItem', this.state.name); AsyncStorage.setItem('todoDate', this.state.name)}}
                >
                    <View>
                        <Text style = {{fontSize: 14, color: 'white', justifyContent: 'center', alignSelf: 'center', marginTop: '3%', fontWeight: "500"}}>
                            Add
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '95%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',

    }

});
