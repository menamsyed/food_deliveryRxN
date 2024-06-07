import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import theme from '../theme/theme';
import {scale, verticalScale} from 'react-native-size-matters';

const CustomInput = (props) => {
  const {keyboardType,placeholder} = props;
  
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.placeholderText}
        keyboardType={keyboardType}
        textAlignVertical="center"
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
  },
});
