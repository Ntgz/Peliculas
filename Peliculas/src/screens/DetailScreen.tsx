import React from 'react'
import { StyleSheet, Text, View,Button,Image,Dimensions,ScrollView,ActivityIndicator,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Movie } from '../interfaces/movieInterfaces';
import { RootStackParams } from '../navigator/Navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import useMovieDetalis from '../hooks/useMovieDetalis';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;


interface Props extends NativeStackScreenProps<RootStackParams, 'Notifications'>{};

const DetailScreen = ( {route}: Props) => 
{
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const { isLoading, cast, movieFull } = useMovieDetalis( movie.id )

    useMovieDetalis( movie.id)
    const navigation = useNavigation();

    
    return (

        <ScrollView>
            <View style={ styles.imageContainer }>
                    <View style={ styles.imageBorder}>
                        <Image
                            source ={{ uri }}
                            style ={ styles.posterImage}
                        />
                    </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            
                {
                    isLoading
                        ? <ActivityIndicator
                            size = { 30 } color = "grey" style={{marginTop:20}}
                        />: <MovieDetails movieFull={ movieFull! } cast ={ cast }/>
                }

                <View style={styles.backButton}>
                    <TouchableOpacity 
                        onPress={() => navigation.pop()}
                    >
                        <Ionicons
                            color="white"
                            name= "arrow-back-outline"
                            size={60}
                            style={ styles.backButton }
                        />
                    </TouchableOpacity>
                </View>
            
            
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({

    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 7,
        elevation: 5,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25

    },

    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle:{
        fontSize:18,
        opacity: 0.8
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageBorder:{
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    backButton:{
        position:'absolute',
        zIndex:999,
        elevation:9,
        top:30,
        left:5
    }

})
