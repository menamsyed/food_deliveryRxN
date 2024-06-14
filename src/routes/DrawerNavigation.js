import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeA from '../screens/home/HomeA';
import {SCREEN_WIDTH} from '../utils/helperFunction';
import DrawerLoginContent from '../components/DrawerLoginContent';
import DrawerLogoutContent from '../components/DrawerLogoutContent';

const Drawer = createDrawerNavigator();
const DrawerNavigation = (props) => {
  const {user} = props
  console.log(user,'abay user yeh hy');

  return (
    <Drawer.Navigator
      screenOptions={{drawerStyle: {width: '80%'}}}
      drawerContent={props =>
        user ? (
          <DrawerLoginContent {...props} />
        ) : (
          <DrawerLogoutContent {...props} />
        )
      }>
      <Drawer.Screen
        name="home"
        component={HomeA}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
