import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import theme from '../theme/theme';

const BottomButton = ({title, onPress, buttonStyle, disabled}) => {
  return (
    <View style={[styles.container, buttonStyle]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.textContainer}
        disabled={disabled}
        onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  container: {
    
    width: '100%',
    height: scale(40),
    alignItems: 'center',
    backgroundColor: theme.activeButton,
    borderRadius: 10,
  },
  buttonTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.white,
  },
  textContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
