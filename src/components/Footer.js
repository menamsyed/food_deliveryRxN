import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import Add from 'react-native-vector-icons/Entypo';
import {useNavigationHandler} from '../routes/NavigationHandler';
import theme from '../theme/theme';
import BottomButton from './BottomButton';

const Footer = props => {
  const {itemDetails} = props;
  console.log(itemDetails);
  const navigation = useNavigationHandler();
  return (
    <View style={styles.bottomLayerContainer}>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={true ? styles.activeDecButton : styles.inactiveDecButton}>
          <Add name="minus" size={20} color={theme.white} />
        </TouchableOpacity>
        <Text style={styles.countTitle}>1</Text>
        <TouchableOpacity style={styles.incButton}>
          <Add name="plus" color={theme.white} size={20} />
        </TouchableOpacity>
      </View>
      <BottomButton
        title={'Add to cart'}
        onPress={() =>
          navigation.navigateTo('homenavigator', {
            screen: 'cart',
            params: {CartProduct: itemDetails},
          })
        }
        buttonStyle={styles.ATCbutton}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  bottomLayerContainer: {
    height: verticalScale(55),
    width: '100%',
    borderTopLeftRadius: scale(12),
    borderTopRightRadius: scale(12),
    borderColor: theme.defaultBackgroundColor,
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  counterContainer: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(10),
  },
  incButton: {
    padding: scale(6),
    backgroundColor: theme.secondaryColor,
    borderRadius: scale(25),
  },
  activeDecButton: {
    padding: scale(6),
    backgroundColor: theme.secondaryColor,
    borderRadius: scale(25),
  },
  inactiveDecButton: {
    padding: scale(6),
    backgroundColor: theme.secondaryColor,
    borderRadius: scale(25),
  },
  countTitle: {
    fontSize: scale(12),
    color: theme.black,
    textAlign: 'center',
    fontWeight: '600',
  },
  ATCbutton: {
    width: '50%',
  },
});
