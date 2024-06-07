import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomInput from './CustomInput';
import theme from '../theme/theme';

//This component is for  @product

const InstructionBox = () => {
  return (
    <View style={styles.instructionContainer}>
      <Text style={styles.titleTxt}>Special Instructions</Text>
      <Text style={styles.descriptionTxt}>
        Please let us know if you are allergic to anything or if we need to
        avoid anything.
      </Text>
      <CustomInput placeholder={'e.g No onions'} keyboardType="default" />
    </View>
  );
};

export default InstructionBox;

const styles = StyleSheet.create({
  instructionContainer: {
    paddingTop: verticalScale(120),
  },
  titleTxt: {
    color: theme.black,
    fontSize: scale(16),
    fontWeight: '500',
  },
  descriptionTxt: {
    color: theme.placeholderText,
    fontSize: scale(12),
    fontWeight: '400',
    paddingBottom:scale(10)
  },
});
