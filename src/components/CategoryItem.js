import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Divider from './Divider';
import theme from '../theme/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(6),
    padding: scale(8),
    backgroundColor: theme.white,
  },
  img: {
    width: verticalScale(80),
    height: verticalScale(80),
    borderRadius: verticalScale(10),
    resizeMode: 'cover',
  },
  imgContainer: {
    width: verticalScale(80),
    height: verticalScale(80),
    backgroundColor: theme.imagePlaceholderColor,
    borderRadius: verticalScale(10),
    alignSelf: 'flex-end',
    marginRight: scale(5),
  },
  textContainer: {
    width: '70%',
    alignItems: 'flex-start',
  },
  titleTxt: {
    fontSize: scale(15),
    fontWeight: 'bold',
    color: theme.black,
  },
  discTxt: {
    fontSize: scale(10),
    color: theme.placeholderText,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currPrice: {
    fontSize: scale(12),
    color: theme.black,
    fontWeight: '600',
  },
  prevPrice: {
    fontSize: scale(8),
    color: theme.black,
    textDecorationLine: 'line-through',
    marginLeft: scale(6),
    marginTop: scale(5),
  },
  msgTxt: {
    fontSize: scale(10),
    color: theme.warning,
    fontWeight: 'bold',
    marginLeft: scale(5),
  },
  buttonFull: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: verticalScale(18),
    width: scale(80),
    backgroundColor: theme.secondaryColor,
    borderRadius: scale(20),
    position: 'absolute',
    zIndex: 1,
    left: scale(247),
    top: scale(18),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  counterText: {
    fontSize: scale(10),
    color: theme.white,
  },
  buttonPartial: {
    width: scale(25),
    height: scale(25),
    backgroundColor: theme.secondaryColor,
    position: 'absolute',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    left: scale(310),
    top: scale(20),
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

const CategoryItem = props => {
  const {
    title,
    image,
    price,
    originalPrice,
    description,
    itemId,
    onPress,
    disabled,
    cartBtn,
    qty,
  } = props;
  return (
    <>
      <TouchableOpacity
        style={styles.mainContainer}
        activeOpacity={0.8}
        disabled={disabled}
        onPress={onPress}>
        <View style={styles.imgContainer}>
          <FastImage style={styles.img} source={{uri: image}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleTxt}>{title}</Text>
          {description ? (
            <Text style={styles.discTxt} numberOfLines={2}>
              {description}
            </Text>
          ) : null}
          <View style={styles.priceContainer}>
            <Text style={styles.currPrice}>Rs. {price}</Text>
            <Text style={styles.prevPrice}>{originalPrice}</Text>
          </View>
          {qty < 1 ? (
            <View>
              <Text style={styles.msgTxt}>Item not available</Text>
            </View>
          ) : null}
        </View>
        {!disabled && (
          <>
            {cartBtn ? (
              <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.buttonFull}>
                <TouchableOpacity>
                  <Icon name="minus" size={15} color={theme.white} />
                </TouchableOpacity>
                <Text style={styles.counterText}>XX</Text>
                <TouchableOpacity>
                  <Icon name="plus" size={15} color={theme.white} />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : qty >= 1 ? (
              <TouchableOpacity style={styles.buttonPartial}>
                <AntDesign color={theme.white} name={'plus'} size={18} />
              </TouchableOpacity>
            ) : null}
          </>
        )}
      </TouchableOpacity>
      <Divider
        height={0.5}
        width={'100%'}
        color={theme.defaultBackgroundColor}
      />
    </>
  );
};

export default CategoryItem;
