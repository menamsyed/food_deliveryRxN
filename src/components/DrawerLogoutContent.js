import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../theme/theme';
import {scale, verticalScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const DrawerLogoutContent = () => {
  return (
    <View>
      <View style={styles.topFlex}></View>
      <View style={styles.bottomFlex}>
        <View style={styles.fieldContainer}>
          <TouchableOpacity style={styles.logoBox}>
            <Feather
              name="log-in"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Log in / Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoBox}>
            <AntDesign
              name="home"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoBox}>
            <Feather
              name="map-pin"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Our locations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoBox}>
            <Feather
              name="phone-call"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DrawerLogoutContent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.white,
  },
  topFlex: {
    backgroundColor: theme.primaryColor,
    height: verticalScale(88),
  },
  bottomFlex: {
    backgroundColor: theme.white,
  },
  fieldContainer: {
    //flexDirection:'column'
    //backgroundColor:theme.secondaryColor,
    height: '100%',
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
  logoBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(8),
    paddingVertical: scale(10),
  },
  txt: {
    fontSize: scale(12),
    color: theme.black,
    marginLeft: scale(20),
    fontWeight:'500'
  },
});
