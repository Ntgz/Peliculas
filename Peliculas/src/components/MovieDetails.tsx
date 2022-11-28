import React from 'react'
import { StyleSheet, Text, View,Button,Image,Dimensions,ScrollView,ActivityIndicator } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterfaces';
import Ionicons from '@expo/vector-icons/Ionicons';


interface Props {
    movieFull : MovieFull;
    cast: Cast[]

}


const MovieDetails = ({ movieFull, cast}: Props) => {
    return (
        <View style={{ marginHorizontal: 20}}>
            <View style={{flexDirection:'row'}}>
                <Ionicons
                    name= "star-outline"
                    color="grey"
                    size= { 16}
                />
                <Text>{ movieFull.vote_average }</Text>

                <Text style={{ marginLeft:5 }}>
                    - { movieFull.genres.map(g => g.name).join(', ')}
                </Text>
            </View>

            <Text style={{ fontSize: 23, marginTop:10, fontWeight:'bold'}}>
                Historia
            </Text>
            <Text style={{fontSize:16}}>
                { movieFull.overview }
            </Text>
            <Text>
                Presupuesto
            </Text>
            <Text>
                { movieFull.budget}
            </Text>
        </View>
    )
}

export default MovieDetails
