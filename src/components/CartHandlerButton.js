import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale, verticalScale} from 'react-native-size-matters';
import theme from '../theme/theme';
import FontAwesome6 from 'react-native-vector-icons/Ionicons.js';

const CartHandlerButton = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.leftBox}>
          <FontAwesome6
            name={false ? 'trash' : 'remove-outline'}
            size={scale(16)}
            color={theme.white}
          />
        </TouchableOpacity>
        <Text adjustsFontSizeToFit style={styles.quatityTxt}>XX</Text>
        <TouchableOpacity style={styles.rightBox}>
          <FontAwesome6 name={'add'} size={scale(16)} color={theme.white} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartHandlerButton;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.placeholderText,
    width: scale(80),
    height: verticalScale(30),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  leftBox: {
    backgroundColor: theme.secondaryColor,
    padding: scale(3),
    borderRadius: scale(20),
  },
  rightBox: {
    backgroundColor: theme.secondaryColor,
    padding: scale(3),
    borderRadius: scale(20),
  },
  quatityTxt:{
    color:theme.white,
    fontWeight:'bold'
  }
});
