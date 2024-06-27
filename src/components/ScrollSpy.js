import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {scale, verticalScale} from 'react-native-size-matters';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import {useGetAllPostQuery} from '../redux/services/post';
import {useNavigationHandler} from '../routes/NavigationHandler';
import theme from '../theme/theme';
import {SCREEN_WIDTH} from '../utils/helperFunction';
import CarouselSlider from './CarouselSlider';
import CategoryItem from './CategoryItem';
import Divider from './Divider';

const XCategoryTabLayout = ({menuData, isSelect, updateIsSelect}) => {
  return (
    <View style={styles.mainTabContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.tabContainer}>
          {menuData.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.4}
              onPress={() => updateIsSelect(item.id)}>
              <View
                style={[
                  item.id == isSelect
                    ? styles.selectedTab
                    : styles.unSelectedTab,
                ]}>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    item.id == isSelect
                      ? styles.selectedTabText
                      : styles.unSelectedTabText,
                  ]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollSpy = props => {
  const {searching, textValue, filteredData} = props;
  const {data, isLoading, isSuccess} = useGetAllPostQuery();
  console.log(filteredData, searching, textValue, 'lol');
  //console.log(data);
  //console.log('aba');

  const navigation = useNavigationHandler();
  const [isSelect, setIsSelect] = useState(1);
  const [layoutObj, setLayoutObj] = useState({});
  const [layoutObjX, setLayoutObjX] = useState({});
  const staticImages = [
    'https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1699651009-Cricket-Craze.jpg&w=2048&q=75',
    'https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1699650814-Sliders.jpg&w=2048&q=75',
    'https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1698624000-Wrap-Web-Cover.jpg&w=2048&q=75',
  ];
  const menuData = [
    {id: 1, title: 'Popular'},
    {id: 2, title: '12.12 Deal 40% off'},
    {id: 3, title: 'Super Savor Deals'},
    {id: 4, title: 'Chicken Craze Deals Upto 40% off'},
    {id: 5, title: 'Popular 2.0'},
    {id: 6, title: 'Deal'},
    {id: 7, title: 'Super Savor Deal'},
    {id: 8, title: 'Chicken Craze'},
  ];
  const dummyData = [
    {
      title: 'Spaghetti Carbonara',
      data: 'Classic Italian pasta dish',
      image: 'https://example.com/image1.jpg',
      price: 12.99,
      originalPrice: 15.99,
      description:
        'A delicious spaghetti dish with creamy sauce, pancetta, and Parmesan cheese.',
      itemId: '1',
      onPress: () => console.log('Spaghetti Carbonara pressed'),
      disabled: false,
      cartBtn: true,
      qty: 1,
    },
    {
      title: 'Margherita Pizza',
      data: 'Traditional Neapolitan pizza',
      image: 'https://example.com/image2.jpg',
      price: 9.99,
      originalPrice: 12.99,
      description:
        'A simple yet flavorful pizza topped with fresh tomatoes, mozzarella, and basil.',
      itemId: '2',
      onPress: () => console.log('Margherita Pizza pressed'),
      disabled: false,
      cartBtn: true,
      qty: 1,
    },
    {
      title: 'Caesar Salad',
      data: 'Crisp and refreshing',
      image: 'https://example.com/image3.jpg',
      price: 7.99,
      originalPrice: 10.99,
      description:
        'A classic salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
      itemId: '3',
      onPress: () => console.log('Caesar Salad pressed'),
      disabled: false,
      cartBtn: true,
      qty: 0,
    },
    {
      title: 'Chicken Tikka Masala',
      data: 'Rich and flavorful',
      image: 'https://example.com/image4.jpg',
      price: 13.99,
      originalPrice: 17.99,
      description:
        'Tender chicken pieces cooked in a creamy and spiced tomato sauce.',
      itemId: '4',
      onPress: () => console.log('Chicken Tikka Masala pressed'),
      disabled: false,
      cartBtn: true,
      qty: 0,
    },
    {
      title: 'Sushi Platter',
      data: 'Variety of fresh sushi',
      image: 'https://example.com/image5.jpg',
      price: 24.99,
      originalPrice: 29.99,
      description:
        'An assortment of fresh sushi rolls and nigiri, served with soy sauce, wasabi, and pickled ginger.',
      itemId: '5',
      onPress: () => console.log('Sushi Platter pressed'),
      disabled: false,
      cartBtn: true,
      qty: 1,
    },
  ];

  //function
  const _updateIsSelect = newState => {
    setIsSelect(newState);
  };

  const _renderItem = ({item, index}) => (
    <CategoryItem
      itemId={item.id}
      title={item.title}
      description={item.body}
      price={item.userId}
      originalPrice={item.userId}
      qty={item.userId}
      disabled={item.disabled}
      onPress={() => navigation.navigateTo('product', {itemDetails: item})}
    />
  );

  return (
    <ScrollView style={styles.emptySearchView}>
      {searching && textValue.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <>
                {textValue?.length > 0 ? (
                  <View style={styles.emptySearchContainer}>
                    <Materiallcons
                      name="search-off"
                      size={100}
                      color={theme.secondaryColor}
                    />
                    <Text style={styles.emptySearchText}>
                      Sorry, no items found for {textValue}
                    </Text>
                  </View>
                ) : (
                  <></>
                )}
              </>
            );
          }}
        />
      ) : (
        <>
          <CarouselSlider bannerImages={staticImages} />
          <XCategoryTabLayout
            menuData={menuData}
            isSelect={isSelect}
            updateIsSelect={_updateIsSelect}
          />
          <View>
            <FlatList
              data={data}
              renderItem={_renderItem}
              keyExtractor={item => item.itemId}
              showsVerticalScrollIndicator={false}
            />

            <Divider height={scale(100)} width={'100%'} color={theme.white} />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainTabContainer: {
    width: SCREEN_WIDTH,
    marginTop: scale(0),
    backgroundColor: theme.white,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.white,
    borderBottomWidth: 1,
    borderColor: theme.defaultBackgroundColor,
    paddingVertical: scale(5),
    paddingHorizontal: scale(8),
  },
  selectedTab: {
    paddingVertical: verticalScale(5),
    marginHorizontal: scale(5),
    borderRadius: 4,
    borderColor: theme.secondaryColor,
    borderBottomWidth: 3,
  },
  unSelectedTab: {
    paddingVertical: verticalScale(5),
    marginHorizontal: scale(5),
    borderBottomWidth: 3,
    borderRadius: 4,
    borderColor: theme.white,
  },
  selectedTabText: {
    color: theme.secondaryColor,
    fontSize: scale(12.5),
    fontWeight: 'bold',
  },
  unSelectedTabText: {
    color: theme.black,
    fontSize: scale(12.5),
    fontWeight: 'bold',
  },
  emptySearchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(150),
    marginHorizontal: 15,
    backgroundColor: theme.white,
  },
  emptySearchView: {
    backgroundColor: theme.white,
  },
  emptySearchText: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.black,
  },
});
