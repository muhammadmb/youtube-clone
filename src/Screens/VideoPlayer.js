import React from 'react';
import {View,Text, FlatList,ActivityIndicator} from 'react-native';
import Header from '../Components/Header.js';

const VideoPlayer = () =>{
    return (
        <View style ={{flex:1}} >
            <Header/>
            <Text>
                VideoPlayer Screen
            </Text>
        </View>
    );
}
export default VideoPlayer;