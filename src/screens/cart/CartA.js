import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CartProductCard from '../../components/CartProductCard';
import CustomStatusBar from '../../components/CustomStatusBar';
import theme from '../../theme/theme';

const CartA = ({route}) => {
  const {CartProduct} = route.params;
  console.log(CartProduct, 'bsdk');
 

  const _renderItem = item => <CartProductCard title={item.title} />;
  return (
    <SafeAreaView>
      <CustomStatusBar
        statusBarColor={theme.priStatusBar}
        contentType={'dark-content'}
      />
      <ScrollView
        style={styles.productListContainer}
        showsVerticalScrollIndicator={false}>
        {/*<FlatList
          data={CartProduct}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
           
        />*/}

        <CartProductCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartA;

const styles = StyleSheet.create({
  productListContainer: {},
});
