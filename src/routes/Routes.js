import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
//importing routes screens
import LoginA from '../screens/login/LoginA';
import OtpA from '../screens/otp/OtpA';
import SignupA from '../screens/signup/SignupA';
import DrawerNavigation from './DrawerNavigation';
import Product from '../screens/product/Product';
import SignUpScreen from '../screens/SignUpScreen';
import CartA from '../screens/cart/CartA';

const Stack = createNativeStackNavigator();
const Routes = props => {
  const {user} = props;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="homenavigator"
          component={DrawerNavigation}
          user={user}
          {...props}
        />
        <Stack.Screen name="login" component={LoginA} />
        <Stack.Screen name="otp" component={OtpA} />
        <Stack.Screen name="signup" component={SignupA} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name='cart' component={CartA}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
