import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import OurLocations from '../screens/address/OurLocations';
import ContactUsA from '../screens/contactus/ContactUsA';
import MyProfile from '../screens/editprofile/MyProfile';
import TCA from '../screens/termscondition/TCA';
import MyOrdersA from '../screens/trackorder/MyOrdersA';
import theme from '../theme/theme';
import {scale} from 'react-native-size-matters';
import CartA from '../screens/cart/CartA';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.primaryColor},
        headerTitleStyle: {fontSize: scale(18), fontWeight: 'bold'},
        headerTintColor: theme.white,
      }}>
      <Stack.Screen
        name="termsconditions"
        component={TCA}
        options={{
          title: 'Terms & Conditions',
        }}
      />
      <Stack.Screen
        name="ourlocations"
        component={OurLocations}
        options={{title: 'Our Locations'}}
      />
      <Stack.Screen
        name="contactus"
        component={ContactUsA}
        options={{title: 'Contact Us'}}
      />
      <Stack.Screen
        name="myorders"
        component={MyOrdersA}
        options={{title: 'My Orders'}}
      />
      <Stack.Screen
        name="myprofile"
        component={MyProfile}
        options={{title: 'My Profile'}}
      />
      <Stack.Screen name="cart" component={CartA} options={{title: 'Cart'}} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
