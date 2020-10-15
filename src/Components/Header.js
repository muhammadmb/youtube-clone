import React from 'react';
import {View, Text} from 'react-native';
import {AntDesign,Octicons,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'

export default function Header (){
    const {colors} = useTheme();
    const dispatch = useDispatch();
    const appTheme = useSelector(state =>{

        return state.myDarkMode
    });
    const MyColor = colors.iconColor;
    const navigation = useNavigation();
    return (
        <View style = {{
            marginTop:Constant.statusBarHeight,
            height:40,
            backgroundColor:colors.headerColor,
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
                    fontWeight:'bold',
                    color:MyColor
                }}
                > 
                    Youtube
                </Text>
            </View>
            <View style = {{
                flexDirection : 'row',
                justifyContent:'space-around',
                width:150,
                margin:7
            }}>
                <Octicons 
                    name="device-camera-video" 
                    size={24} 
                    color={MyColor} 
                />
                <Ionicons 
                    name="ios-search" 
                    size={24} 
                    color={MyColor}
                    onPress = {() =>{
                        navigation.navigate("Search");
                    }}
                />
                <MaterialCommunityIcons 
                    name="account-circle" 
                    size={24} 
                    color={MyColor}
                    onPress = {() => {
                        dispatch({type:"TOGGLE", payload:!appTheme})
                    }}
                />
            </View>
        </View>
    );
}