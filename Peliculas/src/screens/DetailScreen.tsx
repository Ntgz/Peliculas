import React from 'react'
import { StyleSheet, Text, View,Button,Image,Dimensions,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Movie } from '../interfaces/movieInterfaces';
import { RootStackParams } from '../navigator/Navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import useMovieDetalis from '../hooks/useMovieDetalis';

const screenHeight = Dimensions.get('screen').height;


interface Props extends NativeStackScreenProps<RootStackParams, 'Notifications'>{};

const DetailScreen = ( {route}: Props) => 
{
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

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
            <View style={styles.marginContainer}>
                <Ionicons 
                    name="star-outline"
                    color="grey"
                    size={20}
                />
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
    }

})
