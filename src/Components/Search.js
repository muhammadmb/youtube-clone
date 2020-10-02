import React, {useState} from 'react';
import {View,TextInput, ScrollView} from 'react-native';
import {AntDesign,Octicons,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import MiniCard from './MiniCard'
const Search = () => {
    const [search, setSearch] = useState("");
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
                <Ionicons name="md-mic" size={28} color="black" />
                <MaterialCommunityIcons name="filter-variant" size={28} color="black" />
            </View>
            <ScrollView>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
            </ScrollView>
            
        </View>
    );
}

export default Search;