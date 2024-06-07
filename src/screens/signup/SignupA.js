import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import BottomButton from '../../components/BottomButton';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import CustomInput from '../../components/CustomInput';
import CustomStatusBar from '../../components/CustomStatusBar';
import theme from '../../theme/theme';
import {MERCHANT_NAME} from '../../utils/Constants';
import {useNavigationHandler} from '../../routes/NavigationHandler';

const SignupA = () => {
  const navigation = useNavigationHandler();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar statusBarColor={theme.statsuBarDark} />

      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={'arrow-back-sharp'}
            size={scale(25)}
            color={theme.white}
            onPress={() => {
              navigation.navigateTo('login');
            }}
          />
        </View>
        <View>
          <Text style={styles.headerText}>Welcome to {MERCHANT_NAME}</Text>
          <Text style={styles.subText}>
            Please enter your details to continue.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Full Name</Text>
          <CustomInput placeholder={'Enter your full name'} keyboardType="number-pad" />
          <Text style={styles.labelText}>Email</Text>
          <CustomInput placeholder={'Enter your email'} keyboardType="number-pad" />
          <Text style={styles.labelText}>Mobile Number</Text>
          <CustomInput placeholder={'03XXXXXXXXX'} keyboardType="number-pad" />
        </View>
        <View style={styles.buttonContainer}>
          <BottomButton
            title={'Continue'}
            disabled={false} //condition
            buttonStyle={{
              backgroundColor: false
                ? theme.activeButton
                : theme.inactiveButton,
            }}
            onPress={null} //function
          />

          <Text
            style={styles.underlinedText}
            onPress={() => {
              navigation.navigateTo('login');
            }}>
            Already have an account?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupA;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.black,
    padding: scale(15),
    justifyContent: 'center',
  },
  iconContainer: {
    paddingLeft: scale(0),
    paddingTop: scale(4),
    marginBottom: scale(30),
  },
  buttonContainer: {
    marginBottom: 200,
    flex: 1 / 4,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
    color: theme.white,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  underlinedText: {
    textDecorationLine: 'underline',
    fontSize: 15,
    color: theme.white,
    textAlign: 'center',
  },
  labelText: {
    fontSize: 18,
    color: theme.white,
    marginBottom: scale(1),
    marginTop: scale(30),
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 15,
    color: theme.white,
  },
});
