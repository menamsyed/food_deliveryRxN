import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CarouselSlider from './CarouselSlider';
import {SCREEN_WIDTH} from '../utils/helperFucntion';
import {scale, verticalScale} from 'react-native-size-matters';
import theme from '../theme/theme';

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
});

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

export default ScrollSpy = () => {
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

  const updateIsSelect = newState => {
    setIsSelect(newState);
  };

  return (
    <ScrollView>
      <CarouselSlider bannerImages={staticImages} />
      <XCategoryTabLayout
        menuData={menuData}
        isSelect={isSelect}
        updateIsSelect={updateIsSelect}
      />
    </ScrollView>
  );
};
