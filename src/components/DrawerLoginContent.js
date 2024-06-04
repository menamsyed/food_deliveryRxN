import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../theme/theme';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

const DrawerLoginContent = () => {
  return (
    <View>
      <View style={styles.topFlex}>
        <TouchableOpacity>
          <FastImage
            source={require('../assets/images/Icon.png')}
            style={styles.userImg}
          />
        </TouchableOpacity>
        <View style={styles.userDetailsContainer}>
          <Text style={styles.txt2}>username</Text>
          <Text style={styles.txt1}>user@gmail.com</Text>
          <Text style={styles.txt1}>03XXXXXXXXX</Text>
        </View>
        <TouchableOpacity>
          <Feather name="edit" size={25} color={theme.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomFlex}>
        <View style={styles.fieldContainer}>
          <View style={styles.loyaltyContainer}>
            <Ionicons
              name="wallet-outline"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Loyalty Points</Text>
            <View style={styles.pointBox}>
              <Text adjustsFontSizeToFit style={styles.pointTxt}>
                300 Points
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.logoBox}>
            <Ionicons
              name="reader-outline"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoBox}>
            <Feather
              name="phone-call"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoBox}>
            <Feather
              name="trash"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Delete Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoBox}>
            <Feather name="log-out" size={scale(20)} color={theme.warning} />
            <Text style={styles.txt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DrawerLoginContent;

const styles = StyleSheet.create({
  topFlex: {
    backgroundColor: theme.primaryColor,
    height: verticalScale(120),
    paddingHorizontal: scale(10),

    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
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
    fontWeight: '500',
  },
  txt1: {
    fontSize: scale(10),
    color: theme.white,

    fontWeight: '500',
  },
  txt2: {
    fontSize: scale(20),
    color: theme.white,

    fontWeight: '500',
  },

  loyaltyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: verticalScale(8),
    paddingVertical: scale(10),
  },
  pointBox: {
    backgroundColor: theme.secondaryColor,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: scale(10),
    marginLeft: scale(80),
    width: scale(50),
  },
  pointTxt: {
    fontSize: scale(8),
    color: theme.white,
    textAlign: 'center',
    paddingHorizontal: scale(4),
    paddingVertical: scale(2.5),
  },
  userImg: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetailsContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '60%',
  },
});
