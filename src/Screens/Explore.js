import React from 'react';
import {View,Text, FlatList,ScrollView} from 'react-native';
import Header from '../Components/Header.js';
import Card from '../Components/Card.js';
import {useSelector} from 'react-redux';

const LittleCard = ({name}) =>{
    
    return (
        <View style = {{
            backgroundColor:"red",
            width:180,
            borderRadius:5,
            height:42,
            marginTop:10,
            padding:4
        }}>
            <Text style = {{
                textAlign:'center',
                color:"white",
                fontSize:22
            }}>
                {name}
            </Text>
        </View>
    );
}

const Explore = () =>{
    const cardData = useSelector(state =>{
        return state;
    })
    return (
        <View style ={{flex:1}} >
            <Header/>
            <ScrollView>
                <View style ={{
                    margin : 10,
                    flexDirection:"row",
                    flexWrap:"wrap",
                    justifyContent :"space-around"
                }}>
                    <LittleCard name = "Music"/>
                    <LittleCard name = "Movies"/>
                    <LittleCard name = "Football"/>
                    <LittleCard name = "News"/>
                </View>
                <Text style = {{
                    margin:8,
                    fontSize:22,
                    borderBottomWidth:1
                }} >
                    Trending vidoes
                </Text>
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
            </ScrollView>
        </View>
    );
}
export default Explore;