import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home.js';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Home/>
    </View>
  );
}