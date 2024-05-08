import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/Login';

const Stack = createNativeStackNavigator();


const Routes = () => {
  return (
   <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='login' component={Login}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes