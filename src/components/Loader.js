import React from 'react';
import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native';
import { Circle } from 'react-native-animated-spinkit';
import { scale } from 'react-native-size-matters';
import theme from '../theme/theme';
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const Loader = props => {
  const {loading} = props;
  return (
    <Modal transparent animationType="fade" visible={loading}>
      <View style={styles.LoaderBox}>
        <View style={styles.Loader}>
          <Circle size={height / 20} color={theme.white} />
          <Text style={styles.text} numberOfLines={1}>
            Please wait...
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  LoaderBox: {
    height: height,
    width: width,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: theme.black,
    zIndex: 1,
    alignItems: "center",
    opacity: 0.6,

  },
  Loader: {
    backgroundColor: theme.black,
    padding: 30,
    paddingBottom: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: scale(100),
    justifyContent: "center",
    alignItems: "center",
    position:'absolute'
  },
  text: {
    color: theme.white,
    alignSelf: 'center',
    marginTop:20
  },
});
