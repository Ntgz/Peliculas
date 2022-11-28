import React from 'react'
import { Movie } from '../interfaces/movieInterfaces'
import { StyleSheet, Text, View, Button, ActivityIndicator, Dimensions,FlatList,ScrollView } from 'react-native';
import MoviePoster from '../components/MoviePoster';

interface Props{
    title?: string;
    movies: Movie[]
}

const HorizontalSlider = ({title, movies}: Props) => {

   
return (
    <View style={{ height: ( title ) ?  260 : 220}}>

    {
        title && <Text style={{ fontSize:30, fontWeight:'bold', marginRight:10}}>{title}</Text>
    }

    

    <FlatList
    
        data={movies}
        renderItem={ ({item}: any) => (
            <MoviePoster movie={item} width={140} height={200}/>
        )}
        keyExtractor={ ( item) => item.id.toString()}
        horizontal={ true}
        showsHorizontalScrollIndicator={false}

    />

</View> 
)
    
}

export default HorizontalSlider
