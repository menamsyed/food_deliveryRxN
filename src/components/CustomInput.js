import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import theme from '../theme/theme';
import { useNavigationHandler } from '../routes/NavigationHandler';

const CustomInput = props => {
   const {keyboardType, placeholder, maxLength, onChangePhoneNumber, value} =
    props;

  return (
    <View style={styles.mainContainer}>
      <TextInput
        maxLength={maxLength}
        onChangeText={onChangePhoneNumber}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme.placeholderText}
        keyboardType={keyboardType}
        textAlignVertical="center"

        //value={value}
        //"number-pad"
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
    borderColor: theme.defaultBackgroundColor,
    borderWidth: 1,
    paddingLeft: 8,
    color: theme.black,
  },
});
