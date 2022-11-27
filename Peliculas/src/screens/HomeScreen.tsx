import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import movieDB from '../api/movieDB';

const HomeScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {

        movieDB.get('/now_playing')
            .then( resp => {
                console.log(resp.data);
                
            })

    }, [])

    return (
        <View style={{marginTop:50}}>

            <Text>Home Screen</Text>
            <Button
                title="ir detalle"
                onPress={() => navigation.navigate('Notifications')}
            />
            
        </View>
    )
}

export default HomeScreen
