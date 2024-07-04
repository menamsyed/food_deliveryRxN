import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import theme from '../theme/theme';
import InstructionBox from './InstructionBox';

const ProductDescriptonBox = ({itemDetails}) => {
     
  return (
    <View style={styles.txtContainer}>
      <Text style={styles.titleTxt}>{itemDetails.title}</Text>
      <Text style={styles.descriptionTxt}>{itemDetails.body}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.currPricetxt}>Rs. {itemDetails.price}</Text>
        <Text style={styles.oldPricetxt}>Rs. {itemDetails.originalPrice}</Text>
      </View>
      <InstructionBox />
    </View>
  );
};

export default ProductDescriptonBox;

const styles = StyleSheet.create({
  txtContainer: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
  titleTxt: {
    color: theme.black,
    fontSize: scale(20),
    fontWeight: '600',
  },
  titleTxt1: {
    color: theme.black,
    fontSize: scale(16),
    fontWeight: '500',
  },
  descriptionTxt: {
    color: theme.placeholderText,
    fontSize: scale(12),
    fontWeight: '400',
    paddingBottom:scale
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    alignItems: 'center',
    paddingTop: scale(10),
  },
  oldPricetxt: {
    color: theme.black,
    fontSize: scale(10),
    fontWeight: '400',
    textDecorationLine: 'line-through',
  },
  currPricetxt: {
    color: theme.black,
    fontSize: scale(12),
    fontWeight: '600',
  },
});
