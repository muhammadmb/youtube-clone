import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home.js';
import Search from './src/Components/Search.js';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/Screens/VideoPlayer';
import Subscriptions from './src/Screens/Subscriptions';
import Explore from './src/Screens/Explore';
import {Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Taps = createBottomTabNavigator();

const RootHome = () =>{
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

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size = {24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
    >
      <Taps.Screen name = "Home" component = {Home} />
      <Taps.Screen name = "Explore" component = {Explore} />
      <Taps.Screen name = "Subscriptions" component = {Subscriptions} />
    </Taps.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator headerMode = "none">
        <Stack.Screen name = "rootHome" component = {RootHome}/>
        <Stack.Screen name = "Search" component = {Search}/>
        <Stack.Screen name = "VideoPlayer" component = {VideoPlayer}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}