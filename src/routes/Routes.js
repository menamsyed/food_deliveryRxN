import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
//importing routes screens
import CartA from '../screens/cart/CartA';
import LoginA from '../screens/login/LoginA';
import OtpA from '../screens/otp/OtpA';
import Product from '../screens/product/Product';
import SignupA from '../screens/signup/SignupA';
import DrawerNavigation from './DrawerNavigation';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();
const Routes = props => {
  const {user} = props;
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen
          name="drawernavigation"
          component={DrawerNavigation}
          user={user}
          {...props}
        />
        <Stack.Screen
          name="homenavigator"
          component={HomeNavigator}
          {...props}
        />
        <Stack.Screen name="login" component={LoginA} />
        <Stack.Screen name="otp" component={OtpA} />
        <Stack.Screen name="signup" component={SignupA} />
        <Stack.Screen name="product" component={Product} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
