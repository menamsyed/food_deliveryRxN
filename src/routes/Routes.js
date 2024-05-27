import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
//importing routes screens
import LoginA from '../screens/login/LoginA';
import SignupA from '../screens/signup/SignupA';
import HomeA from '../screens/home/HomeA';
import OtpA from '../screens/otp/OtpA';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeA} />
        <Stack.Screen name="login" component={LoginA} />
        <Stack.Screen name="otp" component={OtpA} />
        <Stack.Screen name="signup" component={SignupA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
