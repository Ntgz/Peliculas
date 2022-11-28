import { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if ( isLoading ) {

        return (
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )

    }
    


    return (
        <View style={{marginTop: top +20}}>

            <MoviePoster
                movie={peliculasEnCine[0]}
            />
            
        </View>
    )
}

export default HomeScreen
