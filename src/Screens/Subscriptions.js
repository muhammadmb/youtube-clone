import React from 'react';
import {View,Text, FlatList,ActivityIndicator} from 'react-native';
import Header from '../Components/Header.js';

const Subscriptions = () =>{
    return (
        <View style ={{flex:1}} >
            <Header/>
            <Text>
                Subscriptions Screen
            </Text>
        </View>
    );
}
export default Subscriptions;