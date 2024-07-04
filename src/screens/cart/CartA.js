import React from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CartProductCard from '../../components/CartProductCard';
import CustomStatusBar from '../../components/CustomStatusBar';
import theme from '../../theme/theme';
import {useSelector} from 'react-redux';
import {scale, verticalScale} from 'react-native-size-matters';
import BottomButton from '../../components/BottomButton';
import {useNavigationHandler} from '../../routes/NavigationHandler';

const CartA = ({route}) => {
  const navigation = useNavigationHandler();
  const cartItems = useSelector(state => state.cart.cartData);
  console.log(cartItems, 'cartItems');

  const _renderItem = ({item, index}) => (
    <CartProductCard
      prodID={item.id}
      description={item.description}
      prodQuantity={item.quatity}
      title={item.title}
    />
  );
  return (
    <SafeAreaView>
      <CustomStatusBar
        statusBarColor={theme.priStatusBar}
        contentType={'dark-content'}
      />
      <ScrollView
        style={styles.productListContainer}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.itemId}
          renderItem={_renderItem}
          ListEmptyComponent={() => {
            return (
              <>
                <View style={styles.ListEmptyContentBox}>
                  <Text style={styles.msgTxt}>There is no item present in your cart.</Text>
                  <BottomButton
                    onPress={() => navigation.navigateTo('home')}
                    title={'Go to menu'}
                    buttonStyle={{
                      width: '26%',
                      height: verticalScale(30),
                      marginTop: verticalScale(5),
                    }}
                  />
                </View>
              </>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartA;

const styles = StyleSheet.create({
  productListContainer: {},
  ListEmptyContentBox: {
    height: verticalScale(650),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.white,
  },
  msgTxt:{
    fontSize:scale(12),
    fontWeight:'500',
    color:theme.black
  }
});
