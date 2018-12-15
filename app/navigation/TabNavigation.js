import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Feed from '../screens/Feed'
import Add from '../screens/Add'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';

const TabNavigator = createBottomTabNavigator({
        Feed: Feed,
        Add: Add,
        Profile: Profile
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Feed') {
                    //iconName = `ios-list-box${focused ? '' : '-outline'}`;
                    iconName = (focused ? 'ios-list-box' : 'ios-list-box');
                }
                else if (routeName === 'Add') {
                    iconName = (focused ? 'md-add' : 'md-add');
                }
                else if (routeName === 'Profile') {
                    iconName = (focused ? 'ios-person' : 'ios-person');
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#4cd964',
            inactiveTintColor: 'lightgray',
        },
    }

);


export default createAppContainer(TabNavigator);