import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import Header from '../Components/Header.js';
import Card from '../Components/Card.js';
import {useSelector} from 'react-redux';

export default function Home ({navigation}) {
    const cardData = useSelector(state =>{
        return state.cardData;
    })
    return (
        <View style = {{flex:1}}>
            <Header/>
            <FlatList 
                data={cardData}
                renderItem = {({item}) => {
                    return <Card 
                        video = {item.id.videoId}
                        title = {item.snippet.title}
                        channelName = {item.snippet.channelTitle}
                    />
                }}
                keyExtractor = {item => item.id.videoId}
            />
        </View>
    );
}