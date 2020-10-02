import React from 'react';
import {Image, View, Text, Dimensions} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const MiniCard = () =>{
    return(
        <View style = {{flexDirection:'row',justifyContent:"space-around"}}>
            <Image
                source = {{
                    uri:"https://images.unsplash.com/photo-1575880468469-ac9d6321a4f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
                    course react native it is avialable now
                </Text>
                <Text style = {{fontSize:13,color:'#c7c5c1',marginLeft:7}}>coder society</Text>
                <Text style = {{fontSize:13,color:'#c7c5c1',marginLeft:7}}>8.8k . 2 weeks ago</Text>
            </View>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
        </View>
    );
}
export default MiniCard;