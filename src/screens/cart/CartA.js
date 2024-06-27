import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomStatusBar from '../../components/CustomStatusBar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import theme from '../../theme/theme';

const CartA = ({route}) => {
     const {itemDetails} = route.params
    //console.log(itemDetails,'user CartA main agya');
  return (
    <SafeAreaView>
        <CustomStatusBar statusBarColor={theme.white} contentType={'dark-content'}/>

    </SafeAreaView>
  )
}

export default CartA

const styles = StyleSheet.create({})