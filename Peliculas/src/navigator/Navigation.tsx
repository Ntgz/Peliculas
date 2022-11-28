import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterfaces';

export type RootStackParams = {
    Home: undefined ;
    Notifications: Movie;
}

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Notifications" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default Navigation
