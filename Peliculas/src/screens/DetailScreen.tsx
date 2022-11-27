import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const DetailScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{marginTop:50}}>

            <Text>Detail Screen</Text>
            <Button
                title="ir detalle"
                onPress={() => navigation.navigate('Home')}
            />
            
        </View>
    )
}

export default DetailScreen
