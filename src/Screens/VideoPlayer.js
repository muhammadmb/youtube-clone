import React from 'react';
import {View,Text, FlatList,Dimensions} from 'react-native';
import Header from '../Components/Header.js';
import { WebView } from 'react-native-webview';
import Constant from 'expo-constants'

const VideoPlayer = (props) =>{
    return (
        <View style ={{flex:1, marginTop:Constant.statusBarHeight}} >
            <Header/>
            <View style = {{
                width:"100%",
                height:200
            }} >
                <Webview
                    source = {{uri:`https://www.youtube.com/embed/${props.videoId}`}}
                />
            </View>
            <Text style = {{
                fontSize:20,
                width:Dimensions.get("screen").width - 50,
                margin:9
            }}
            numberOfLines = {2}
            >
                {props.title}
            </Text>
            <View 
                style = {{borderBottomWidth:1}}
            />
        </View>
    );
}
export default VideoPlayer;