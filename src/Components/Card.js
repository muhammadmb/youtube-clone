import React from 'react';
import {Image, View, Text, Dimensions} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
const Card = () =>{
  return(
       <View style = {{marginBottom:6}}>
        <Image
            source = {{uri:"https://images.unsplash.com/photo-1601306483417-134e652e544f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
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
                    OPPO Rendo - Available Now! 
                </Text>
                <Text style = {{fontSize:12,color:'#c7c5c1'}} >OPPO Egypt . 14k views . 7 houres ago</Text>
            </View>

        </View>
    </View>
  );
}
export default Card;