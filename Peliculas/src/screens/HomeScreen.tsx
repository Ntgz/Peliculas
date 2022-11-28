import { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Dimensions,FlatList,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

const windowWidth =Dimensions.get('window').width;

const HomeScreen = () => {

    const { nowPlaying,popular, toprated, upcoming,isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if ( isLoading ) {

        return (
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )

    }
    


    return (
        <ScrollView>
        <View style={{marginTop: top +20}}>

            <View style={{
                height:440
            }}> 
                <Carousel
                
                    data = {nowPlaying}
                    renderItem={ ({item}: any) => <MoviePoster movie={item}/>}
                    sliderWidth={ windowWidth }
                    itemWidth = { 300 }
                    
                />
            </View>
            
        </View>

        <HorizontalSlider title="Popular" movies={popular}/>
        <HorizontalSlider title="Top Rated" movies={toprated}/>
        <HorizontalSlider title="Upcoming" movies={upcoming}/>

        </ScrollView>
    )
}

export default HomeScreen
