import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

// navigator
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => <AppContainer/> ;

export default App;

class WelcomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title='Login' onPress={() => this.props.navigation.navigate('Dashboard')} />
                <Button title='Sign up' onPress={() => alert('button pressed')} />
            </View>
        );
    }
}

class DashboardScreen extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>DashboardScreen</Text>
            </View>
        );
    }
}

class Feed extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Feed</Text>
            </View>
        )
    }
}

class Profile extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Profile</Text>
            </View>
        )
    }
}

class Settings extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Settings</Text>
            </View>
        )
    }
}


const DashboardTabNavigator = createBottomTabNavigator({
    Feed,
    Profile,
    Settings
}, {
    navigationOptions: ({navigation}) => {
        const {routeName} = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName
        }
    }
}
);

const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator
}, {
    defaultNavigationOptions: ({navigation}) => {
        return {
            headerLeft: (
                <Icon
                style={{
                    paddingLeft: 10,
                }}
                onPress={() => navigation.openDrawer()}
                name="bars"
                size={30}
                color="#000"/>
            )
        }
    }
})

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    }
})

const appSwitchNavigator = createSwitchNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Dashboard: {
        screen: AppDrawerNavigator
    }
});

const AppContainer = createAppContainer(appSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
