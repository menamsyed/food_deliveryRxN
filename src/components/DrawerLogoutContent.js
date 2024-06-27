import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigationHandler } from '../routes/NavigationHandler';
import theme from '../theme/theme';

const DrawerLogoutContent = () => {
  const navigation = useNavigationHandler();
  return (
    <View>
      <View style={styles.topFlex}></View>
      <View style={styles.bottomFlex}>
        <View style={styles.fieldContainer}>
          <TouchableOpacity
            style={styles.logoBox}
            onPress={() => navigation.navigateTo('login')}>
            <Feather
              name="log-in"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Log in / Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoBox}
            onPressOut={() =>
              navigation.navigateTo('homenavigator', {screen: 'termsconditions'})
            }>
            <AntDesign
              name="home"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoBox}
            onPress={() => {
              navigation.navigateTo('homenavigator', {screen: 'ourlocations'});
            }}>
            <Feather
              name="map-pin"
              size={scale(20)}
              color={theme.secondaryColor}
            />
            <Text style={styles.txt}>Our locations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigateTo('homenavigator', {screen: 'contactus'});
            }}
            style={styles.logoBox}>
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
    fontWeight: '500',
  },
});
