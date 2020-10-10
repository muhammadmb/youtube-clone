import React, { useState } from "react";
import {View,TextInput, FlatList,ActivityIndicator} from 'react-native';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import MiniCard from './MiniCard';
import {useSelector, useDispatch} from 'react-redux'

const Search = ({navigation}) => {

    const dispatch = useDispatch();
    const miniCardData = useSelector(state =>{
        return state.cardData;
    })
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const APIKey = "AIzaSyA58jkqi9TjFK8Z5FRgvltvLrOh52omF14";
    const API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=${APIKey}`;
    
    const fetchData = ()=>{
        setLoading(true);
        fetch(API)
        .then(res => res.json())
        .then(data =>{
            setLoading(false);
            dispatch({type:"ADD", payload:data.items})
        }).catch (err =>{
            alert("check your internet connection")
        })
    }
    return(
        <View style = {{flex:1}}>
            <View 
              style = {{
                  flexDirection : 'row',
                  margin:2,
                  marginTop:Constant.statusBarHeight,
                  justifyContent:'space-around'
              }}
            >
                <Ionicons 
                    name="md-arrow-back" 
                    size={30} 
                    color="black"
                    onPress = {() => {
                        navigation.goBack();
                    }}
                    />
                <TextInput
                style = {{width : "70%", marginLeft:2, marginRight:1, backgroundColor:'#e6e6e6',height:35,padding:10,borderRadius:20}}
                value = {search}
                onChangeText = {(text) => {setSearch(text); fetchData();}}
                />
                <Ionicons name="md-mic" size={30} color="black" />
                <MaterialCommunityIcons name="filter-variant" size={30} color="black" />
            </View>
            {loading ? 
                <ActivityIndicator 
                    size = "large"
                    color = "red"
                    style = {{marginTop : 10}}
                />
            :
                null
            }
            
            <FlatList
                data = {miniCardData}
                renderItem = {({item}) =>{
                    return <MiniCard
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

export default Search;