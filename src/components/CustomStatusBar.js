import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomStatusBar = ({statusBarColor,contentType}) => {
  return (
    <>
      <StatusBar barStyle={contentType || 'light-content'} backgroundColor={statusBarColor}/>
    </>
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({});
