import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-banner-carousel-updated';
import FastImage from 'react-native-fast-image';
import {SCREEN_HEIGHT} from '../utils/helperFucntion';
import theme from '../theme/theme';

export default CarouselSlider = props => {
  const {width} = useWindowDimensions();
  const {bannerImages} = props;

  const _renderPage = (image, index) => {
    return (
      <View key={index}>
        <FastImage
          style={{...styles.sliderImage, height: width / 2}}
          source={{uri: image, priority: 'high'}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        autoplay
        autoplayTimeout={3000}
        loop
        index={0}
        pageSize={width}
        showsPageIndicator={true}
        pageIndicatorStyle={{backgroundColor: theme.defaultBackgroundColor}}
        activePageIndicatorStyle={{backgroundColor: theme.secondaryColor}}>
        {bannerImages?.map((image, index) =>
          image != null ? _renderPage(image, index) : 'no image found',
        )}
      </Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -9999,
  },
  sliderImage: {
    width: '100%',
    backgroundColor: theme.defaultBackgroundColor,
  },
});
