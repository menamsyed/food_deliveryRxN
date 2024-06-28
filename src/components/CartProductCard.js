import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {scale, verticalScale} from 'react-native-size-matters';
import theme from '../theme/theme';
import CartHandlerButton from './CartHandlerButton';
import Divider from './Divider';

const CartProductCard = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.leftBox}>
          <View style={styles.imageBox}>
            <FastImage />
          </View>
          <View style={styles.txtBoxL}>
            <Text style={styles.txtTitle} numberOfLines={2}>
              product titleproduct titleproduct
            </Text>
            <Text>listted addon</Text>
          </View>
        </View>

        <View style={styles.rightBox}>
          <CartHandlerButton />
          <View style={styles.txtBoxR}>
            <Text style={styles.prevPrice}>Rs.180</Text>
            <Text style={styles.currPrice}>Rs. 99</Text>
          </View>
        </View>
      </View>
      <Divider height={1} width={'100%'} color={theme.imagePlaceholderColor} />
    </>
  );
};

export default CartProductCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    height: verticalScale(90),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(8),
  },
  imageBox: {
    backgroundColor: theme.imagePlaceholderColor,
    height: verticalScale(75),
    width: scale(75),
    borderRadius: scale(10),
    marginRight: scale(10),
  },
  leftBox: {flexDirection: 'row'},
  rightBox: {
    alignItems: 'flex-end',
  },
  txtBoxR: {
    alignItems: 'flex-end',
    marginTop: verticalScale(6),
    marginRight: scale(4),
  },
  txtBoxL: {
    alignItems: 'flex-start',
    width: '50%',
  },
  txtTitle: {
    fontSize: scale(14),
    fontWeight: '700',
    color: theme.secondaryColor,
  },

  prevPrice: {
    textDecorationLine: 'line-through',
    fontSize: scale(10),
    color: theme.black,
  },
  currPrice: {
    fontSize: scale(12),
    fontWeight: '600',
    color: theme.black,
  },
});
