import React from 'react';
import {View,Text, FlatList,Dimensions} from 'react-native';
import Header from '../Components/Header.js';
import { WebView } from 'react-native-webview';
import Constant from 'expo-constants'

const VideoPlayer = ({route}) =>{

    const {videoId,title} = route.params

    return (
        <View style ={{flex:1, marginTop:Constant.statusBarHeight}} >
            <Header/>
            <View style = {{
                width:"100%",
                height:200
            }} >
                <Webview
                    javaScriptEnabled = {true}
                    domStorageEnabled = {true}
                    source = {{uri:`https://www.youtube.com/embed/${videoId}`}}
                />
            </View>
            <Text style = {{
                fontSize:20,
                width:Dimensions.get("screen").width - 50,
                margin:9
            }}
            numberOfLines = {2}
            >
                {title}
            </Text>
            <View 
                style = {{borderBottomWidth:1}}
            />
        </View>
    );
}
export default VideoPlayer;