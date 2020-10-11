import React from 'react';
import {Image, View, Text, Dimensions} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
const Card = (props) =>{
  return(
       <View style = {{marginBottom:6}}>
        <Image
            source = {{uri:`https://i.ytimg.com/vi/${props.video}/default.jpg`}}
            style = {{
                height:200,
            }}
        />
        <View style={{
            flexDirection:'row',
            margin:5
            }}
        >
            <MaterialCommunityIcons name="account-circle" size={44} color="black" />
            <View style = {{justifyContent :'space-evenly'}}>
                <Text style={{fontWeight:'bold', width:Dimensions.get("screen").width - 60}} ellipsizeMode = "tail" numberOfLines={2}>
                    {props.title} 
                </Text>
                <Text style = {{fontSize:12,color:'#c7c5c1'}} >{props.channel} . 14k views . 7 houres ago</Text>
            </View>

        </View>
    </View>
  );
}
export default Card;