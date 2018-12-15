import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../screens/Login'
import Feed from '../screens/Feed'
import Add from '../screens/Add'
import Profile from '../screens/Profile'
import TabNavigation from '../navigation/TabNavigation'

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    TabNavigation: {
        screen: TabNavigation,
        navigationOptions: {
            title: 'Todo',
            headerStyle: {
                backgroundColor: '#4cd964'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 28,
                fontWeight: 'bold'
            },

        }
    },
    Add: {
        screen: Add
    },
    Profile: {
        screen: Profile
    },
});

export default createAppContainer(AppNavigator);