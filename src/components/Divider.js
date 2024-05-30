import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Divider = props => {
  const {height, width, color} = props;
  return <View style={{height: height, width: width, backgroundColor: color}}></View>;
};

export default Divider;
