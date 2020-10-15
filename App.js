import React from 'react';
import Home from './src/Screens/Home.js';
import Search from './src/Components/Search.js';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/Screens/VideoPlayer';
import Subscriptions from './src/Screens/Subscriptions';
import Explore from './src/Screens/Explore';
import { MaterialIcons } from '@expo/vector-icons';
import {Provider, useSelector} from 'react-redux';
import {createStore, combineReducers } from 'redux';
import {Reducer} from './src/Reducers/Reducer';
import {themeReducer} from './src/Reducers/themeReducer';

const CustomDarkTheme = {
  ...DarkTheme,
  colors : {
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tapIcon:"white"
  }
}
const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tapIcon:"red"
  }
} 
const RootReducer = combineReducers ({
  cardData : Reducer,
  myDarkMode : themeReducer
})
const store = createStore(RootReducer);

const Stack = createStackNavigator();
const Taps = createBottomTabNavigator();

const RootHome = () =>{
  const {colors} = useTheme();
  return(
    <Taps.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Explore') {
              iconName ='explore';
            } else if (route.name === 'Subscriptions') {
              iconName = 'subscriptions';
            }
            return <MaterialIcons name={iconName} size = {24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.tapIcon,
          inactiveTintColor: 'gray',
        }}
    >
      <Taps.Screen name = "Home" component = {Home} />
      <Taps.Screen name = "Explore" component = {Explore} />
      <Taps.Screen name = "Subscriptions" component = {Subscriptions} />
    </Taps.Navigator>
  );
}

export function app() {
  
  return (
    
        <Stack.Navigator headerMode = "none">
          <Stack.Screen name = "rootHome" component = {RootHome}/>
          <Stack.Screen name = "Search" component = {Search}/>
          <Stack.Screen name = "VideoPlayer" component = {VideoPlayer}/>
        </Stack.Navigator>
     

  );
}

export default () =>  {
  
  return(
    <Provider store = {store} >
      <NavigationContainer theme={ cuurentTheme ? CustomDarkTheme : CustomDefaultTheme} >
       <App/>
      </NavigationContainer>
    </Provider>
  );
}