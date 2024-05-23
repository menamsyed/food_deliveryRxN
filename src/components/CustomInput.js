import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import theme from '../theme/theme';
import {scale, verticalScale} from 'react-native-size-matters';

const CustomInput = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={'03XX-XXXXXXX'}
        placeholderTextColor={theme.placeholderText}
        keyboardType="number-pad"
        textAlignVertical="center"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: scale(40),
    backgroundColor: theme.white,
    borderRadius: 4,
    borderColor: theme.white,
    borderWidth: 1,
    paddingLeft: 8,
  },
});
