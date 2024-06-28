import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import CustomStatusBar from '../../components/CustomStatusBar';
import Footer from '../../components/Footer';
import ProductDescriptonBox from '../../components/ProductDescriptonBox';
import {useNavigationHandler} from '../../routes/NavigationHandler';
import theme from '../../theme/theme';

const Product = ({route}) => {
  const navigation = useNavigationHandler();
  const {itemDetails} = route.params;
  console.log(itemDetails, 'logo');

  return (
    <>
      <CustomStatusBar
        statusBarColor={theme.white}
        contentType={'dark-content'}
      />
      <SafeAreaView style={styles.rootContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons
              name={'arrow-back-sharp'}
              size={scale(28)}
              color={theme.secondaryColor}
            />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <FastImage source={{uri: itemDetails.image}} />
          </View>
          <ProductDescriptonBox itemDetails={itemDetails} />
        </ScrollView>
        <Footer itemDetails={itemDetails}/>
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
    backfaceVisibility: 'visible',
    alignSelf: 'center',
    elevation: scale(10),
    marginVertical: scale(10),
    borderRadius: scale(6),
  },
});
