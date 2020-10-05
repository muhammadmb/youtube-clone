import React from 'react';
import {Image, View, Text, Dimensions} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const MiniCard = (props) =>{
    return(
        <View style = {{flexDirection:'row',justifyContent:"space-around"}}>
            <Image
                source = {{
                    uri:`https://i.ytimg.com/vi/${props.video}/default.jpg`
                }}
                style = {{
                    width:"45%",
                    height:100,
                    margin:6
                }}
            />
            <View>
                <Text style = {{
                    fontSize:18,
                    width:Dimensions.get("screen").width/2,
                    marginLeft:7
                    }}
                    numberOfLines = {3}
                >
                    {props.title}
                </Text>
                <Text style = {{fontSize:13,color:'#c7c5c1',marginLeft:7}}>{props.channelName}</Text>
                <Text style = {{fontSize:13,color:'#c7c5c1',marginLeft:7}}>8.8k . 2 weeks ago</Text>
            </View>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
        </View>
    );
}
export default MiniCard;