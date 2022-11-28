import React from 'react'
import { StyleSheet, Text, View,Button,Image,Dimensions,ScrollView,FlatList } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterfaces';
import Ionicons from '@expo/vector-icons/Ionicons';
import CastItem from './CastItem'


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
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight:'bold'}}>
                Presupuesto
            </Text>
            <Text style={{ fontSize:18}}>
            { new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format( movieFull.budget)}
            </Text>

            <View style={{ marginTop:10, marginBottom:100, }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight:'bold'}}>Actores</Text>
                {/* <CastItem actor={ cast[0]}/> */}
                <FlatList
                    data={ cast}
                    keyExtractor={ (item) => item.id.toString()}
                    renderItem={ ({item}) => <CastItem actor={item}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style ={{ marginTop:10, height:70, marginHorizontal:-50}}
                />
            </View>
        </View>
    )
}

export default MovieDetails
