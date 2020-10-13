import React from 'react';
import {Image, View, Text, Dimensions,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation, useTheme} from '@react-navigation/native'

const Card = (props) =>{
    const navigation = useNavigation();
    const {colors} = useTheme();
    const textColor = colors.iconColor;
  return(
      <TouchableOpacity
        onPress = {() =>{
            console.log(props)
            navigation.navigate("VideoPlayer",{videoId:props.video, title:props.title})
        }}
      >
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
                <MaterialCommunityIcons name="account-circle" size={44} color={textColor} />
                <View style = {{justifyContent :'space-evenly', color:textColor}}>
                    <Text style={{fontWeight:'bold', width:Dimensions.get("screen").width - 60, color:textColor}} ellipsizeMode = "tail" numberOfLines={2}>
                        {props.title} 
                    </Text>
                    <Text style = {{fontSize:12,color:'#c7c5c1'}} >{props.channelName} . 14k views . 7 houres ago</Text>
                </View>

            </View>
        </View>
    </TouchableOpacity>
  );
}
export default Card;