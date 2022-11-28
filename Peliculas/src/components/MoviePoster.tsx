import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator,Image,TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}


const MoviePoster = ({ movie, height = 420, width = 300 }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

    const navigation = useNavigation();

    // console.log(movie.poster_path);
    
    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('Notifications', movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:8
        }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri:uri
                    }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}

export default MoviePoster

const styles = StyleSheet.create({

    image:{
        flex:1,
        borderRadius:18,
        
    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 5,
    }

});
