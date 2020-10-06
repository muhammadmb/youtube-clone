import React from 'react';
import {View,Text, FlatList,ActivityIndicator} from 'react-native';
import Header from '../Components/Header.js';

const Explore = () =>{
    return (
        <View style ={{flex:1}} >
            <Header/>
            <Text>
                Explore Screen
            </Text>
        </View>
    );
}
export default Explore;