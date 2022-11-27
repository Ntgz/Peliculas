import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

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
