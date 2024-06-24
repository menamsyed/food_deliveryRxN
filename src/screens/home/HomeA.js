import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/Header';
import ScrollSpy from '../../components/ScrollSpy';
import theme from '../../theme/theme';

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
