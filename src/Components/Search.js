import React, {useState} from 'react';
import {View,TextInput, ScrollView, FlatList,ActivityIndicator} from 'react-native';
import {AntDesign,Octicons,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import MiniCard from './MiniCard';

 // 
// 


const Search = () => {

    const [search, setSearch] = useState("");
    const [miniCardData, setMiniCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const APIKey = "AIzaSyBo6lFei_-w3XP6UL_9fYuGpHzIniMVk3c";
    const API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=${APIKey}`;
    const fetchData = ()=>{
        setLoading(true);
        fetch(API)
        .then(res => res.json())
        .then(data =>{
            setLoading(false);
            setMiniCardData(data.items);
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
                <Ionicons name="md-arrow-back" size={28} color="black" />
                <TextInput
                style = {{width : "70%", marginLeft:2, marginRight:1, backgroundColor:'#e6e6e6',height:35,padding:10,borderRadius:20}}
                value = {search}
                onChangeText = {(text) => setSearch(text)}
                />
                <MaterialCommunityIcons name="send-circle" size={29} color="black" onPress = {() => fetchData()}/>
                <Ionicons name="md-mic" size={28} color="black" />
                <MaterialCommunityIcons name="filter-variant" size={28} color="black" />
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