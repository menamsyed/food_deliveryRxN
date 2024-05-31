import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import theme from '../../theme/theme';
import Header from '../../components/Header';
import ScrollSpy from '../../components/ScrollSpy';
import {useNavigation} from '@react-navigation/native';

const HomeA = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar statusBarColor={theme.primaryColor} />
      <Header/>
      <ScrollSpy />
    </SafeAreaView>
  );
};

export default HomeA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.defaultBackgroundColor,
  },
});
