import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import CustomStatusBar from '../../components/CustomStatusBar';
import theme from '../../theme/theme';
import FastImage from 'react-native-fast-image';
import {scale, verticalScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigationHandler } from '../../routes/NavigationHandler';
import CustomInput from '../../components/CustomInput';

const Product = ({route}) => {
    const navigation = useNavigationHandler();
  const {itemDetails} = route.params;

  return (
    <>
      <CustomStatusBar
        statusBarColor={theme.white}
        contentType={'dark-content'}
      />
      <SafeAreaView style={styles.rootContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.iconContainer} onPress={()=>{navigation.goBack()}}>
            <Ionicons
              name={'arrow-back-sharp'}
              size={scale(28)}
              color={theme.secondaryColor}
            />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <FastImage source={{uri: itemDetails.image}} resizeMode="cover" />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.titleTxt}>{itemDetails.title}</Text>
            <Text style={styles.descriptionTxt}>{itemDetails.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currPricetxt}>Rs. {itemDetails.price}</Text>
              <Text style={styles.oldPricetxt}>
                Rs. {itemDetails.originalPrice}
              </Text>
            </View>
            <View>
                <Text>Special Instructions</Text>
                <CustomInput/>
            </View>
          </View>
        </ScrollView>
        <View></View>
      </SafeAreaView>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.white,
  },
  iconContainer: {
    paddingLeft: scale(20),
    paddingTop: scale(20),
    zIndex: 1,
    position: 'absolute',
  },
  imgContainer: {
    width: scale(200),
    height: scale(200),
    backgroundColor: theme.imagePlaceholderColor,
    alignSelf: 'center',
    elevation: scale(20),
    marginVertical: scale(10),
    borderRadius: scale(6),
  },
  txtContainer: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
  titleTxt: {
    color: theme.black,
    fontSize: scale(20),
    fontWeight: '600',
  },
  descriptionTxt: {
    color: theme.placeholderText,
    fontSize: scale(12),
    fontWeight: '400',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    alignItems: 'center',
    paddingTop: scale(10),
  },
  oldPricetxt: {
    color: theme.black,
    fontSize: scale(10),
    fontWeight: '400',
    textDecorationLine: 'line-through',
  },
  currPricetxt: {
    color: theme.black,
    fontSize: scale(12),
    fontWeight: '600',
  },
});
