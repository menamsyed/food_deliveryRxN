import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'

import theme from '../theme/theme';

import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigationHandler} from '../routes/NavigationHandler';
export default Header = props => {
  const {onChangeText, textValue} = props;
  const drawerOpener = useNavigation();
  const navigation = useNavigationHandler();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentBox}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              drawerOpener.openDrawer();
            }}>
            <Feather name="forwardburger" size={scale(25)} color={theme.white} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.locationContainer}>
            <Text style={styles.txt1}>Change Location</Text>
            <Text adjustsFontSizeToFit style={styles.txt2}>
              staticLocation
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() =>
              navigation.navigateTo('homenavigator', {screen: 'cart'})
            }>
            {true && (
              <View style={styles.qtyBox}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={styles.txt3}>
                  55
                </Text>
              </View>
            )}
            <AntDesign
              name="shoppingcart"
              size={scale(20)}
              color={theme.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="Search your favourite food"
        placeholderTextColor={theme.placeholderText}
        maxLength={50}
        style={styles.inputBox}
        onChangeText={onChangeText}
        value={textValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: moderateScale(8),

    backgroundColor: theme.primaryColor,
  },
  contentBox: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'between',
    width: '50%',
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '50%',
  },
  inputBox: {
    backgroundColor: theme.white,
    width: '95%',
    height: verticalScale(32),
    alignSelf: 'center',
    textAlign: 'left',
    paddingHorizontal: scale(15),
    color: theme.black,
    borderRadius: 8,
    fontSize: scale(10),
    marginTop: verticalScale(1),
    zIndex: 1,
  },
  locationContainer: {
    marginLeft: 10,
    width: '200%',
  },
  qtyBox: {
    position: 'absolute',
    top: -6,
    left: -6,
    backgroundColor: theme.secondaryColor,
    width: scale(15),
    height: scale(15),
    borderColor: theme.primaryColor,
    elevation: 20,
    borderWidth: 0.2,
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,

    shadowColor: theme.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  txt1: {
    fontSize: scale(8),
    color: theme.white,
    textAlign: 'left',
  },
  txt2: {
    fontSize: scale(12),
    fontWeight: 'bold',
    textAlign: 'left',
    color: theme.white,
  },
  txt3: {
    margin: 2,
    fontSize: scale(25),
    fontWeight: 'bold',
    color: theme.white,
  },
});
