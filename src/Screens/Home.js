import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../Components/Header.js';
import Card from '../Components/Card.js';

export default function Home () {
    return (
        <View>
            <Header/>
            <ScrollView>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
        </View>
    );
}