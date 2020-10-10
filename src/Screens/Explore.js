import React from 'react';
import {View,Text, FlatList,ActivityIndicator} from 'react-native';
import Header from '../Components/Header.js';

const LittleCard = () =>{
    return (
        <View style = {{
            backgroundColor:"red",
            width:120,
            borderRadius:22
        }}>
            <Text style = {{
                textAlign:'center',
                color:"white",
                fontSize:22
            }}>
                hello
            </Text>
        </View>
    );
}

const Explore = () =>{
    return (
        <View style ={{flex:1}} >
            <Header/>
            <LittleCard/>
        </View>
    );
}
export default Explore;