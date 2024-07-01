import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale, verticalScale} from 'react-native-size-matters';
import {
  default as AntDesign,
  default as Icon,
} from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/slices/CartSlice';
import theme from '../theme/theme';
import Divider from './Divider';

const CategoryItem = props => {
  const cart = useSelector(state => state.cart.cartData);
  //console.log(cart, 'cart');
  const dispatch = useDispatch();

  const _addItemToCart = item => {
    //console.log(item, 'tello');
    const prodItem = {
      ...item,
      quantity: 1,
    };
    dispatch(addToCart(prodItem));
    console.log(prodItem);
  };

  const [openCartButton, setOpenCartButton] = useState(false);

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
    data
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
          <Text style={styles.titleTxt} numberOfLines={1}>
            {title}
          </Text>
          {description ? (
            <Text style={styles.discTxt} numberOfLines={2}>
              {description}
            </Text>
          ) : null}
          <View style={styles.priceContainer}>
            <Text style={styles.currPrice}>Rs. {price}</Text>
            <Text style={styles.prevPrice}>{originalPrice}</Text>
          </View>
          {true ? (
            <View>
              <Text style={styles.msgTxt}>Item not available</Text>
            </View>
          ) : null}
        </View>
        {!disabled && (
          <>
            {openCartButton ? (
              <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.buttonFull}>
                <TouchableOpacity
                  onPress={() => setOpenCartButton(!openCartButton)}>
                  <Icon name="minus" size={15} color={theme.white} />
                </TouchableOpacity>
                <Text adjustsFontSizeToFit style={styles.counterText}>
                  X
                </Text>
                <TouchableOpacity>
                  <Icon name="plus" size={15} color={theme.white} />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : qty >= 1 ? (
              <TouchableOpacity
                style={styles.buttonPartial}
                onPress={() => {
                  setOpenCartButton(!openCartButton);
                  _addItemToCart(props);
                }}>
                <AntDesign color={theme.white} name={'plus'} size={18} />
              </TouchableOpacity>
            ) : (
              <View>{null}</View>
            )}
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

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(5),
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
    width: '72%',
    alignItems: 'flex-start',
    paddingHorizontal: scale(10),
    marginEnd: scale(10),
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
    position: 'relative',
    //zIndex: 1,
    left: scale(333),
    top: scale(28),
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
    position: 'relative',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    left: scale(338),
    top: scale(30),
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
