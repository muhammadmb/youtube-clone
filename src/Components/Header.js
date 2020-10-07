import React from 'react';
import {View, Text} from 'react-native';
import {AntDesign,Octicons,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native';

export default function Header (){
    const navigation = useNavigation();
    return (
        <View style = {{
            marginTop:Constant.statusBarHeight,
            height:40,
            backgroundColor:"white",
            flexDirection:'row',
            justifyContent:'space-between',
            elevation:1
        }}>
            <View style = {{
                flexDirection:'row',
                margin:5
                }}>
                <AntDesign 
                    name = "youtube" 
                    size = {32} 
                    color = "red"
                    style = {{
                        marginLeft:20
                    }}
                />
                <Text style = {{
                    fontSize:20,
                    marginLeft:5,
                    fontWeight:'bold'
                }} > Youtube </Text>
            </View>
            <View style = {{
                flexDirection : 'row',
                justifyContent:'space-around',
                width:150,
                margin:7
            }}>
                <Octicons name="device-camera-video" size={24} color="#c7c5c1" />
                <Ionicons 
                    name="ios-search" 
                    size={24} 
                    color="#c7c5c1"
                    onPress = {() =>{
                        navigation.navigate("Search");
                    }}
                    />
                <MaterialCommunityIcons name="account-circle" size={24} color="#c7c5c1" />
            </View>
        </View>
    );
}