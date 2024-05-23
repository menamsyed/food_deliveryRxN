import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomButton from '../../components/BottomButton';
import CustomStatusBar from '../../components/CustomStatusBar';

import { scale, verticalScale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import theme from '../../theme/theme';
import { useNavigationHandler } from '../../routes/NavigationHandler';

const LoginA = () => {
  const navigation = useNavigationHandler();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar statusBarColor={'black'} />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={'arrow-back-sharp'}
            size={scale(25)}
            color={theme.white}
          />
        </View>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{flex: 1}}>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.headerText}>What's your mobile number?</Text>
              <Text style={styles.subText}>
                Please enter your phone number and tap 'Login' to verify.
              </Text>
            </View>

            <View>
              <Text style={styles.labelText}>Enter your Mobile Number</Text>
            </View>
            <View style={styles.inputContainer}>
              <CustomInput />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <BottomButton
              title={'Login'}
              disabled={false} //condition
              buttonStyle={{
                backgroundColor: false
                  ? theme.activeButton
                  : theme.inactiveButton,
              }}
              onPress={null} //function
            />
            <Text 
            style={styles.registerText}
            onPress={()=>{
              navigation.navigateTo('signup')
            }}

            
            >Register</Text>
          </View>
        </KeyboardAwareScrollView>

        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.bottomTextContainer}>
            <View>
              <Text style={styles.subText}>By registering,you accept our</Text>
            </View>
            <View style={styles.termcondContainer}>
              <Text style={styles.underlinedText}>Terms & Conditions</Text>
              <Text style={styles.subText}> and </Text>
              <Text style={styles.underlinedText}>Privacy Policy</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default LoginA;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.black,
    padding: scale(10),
    paddingTop: scale(20),
  },
  container: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  iconContainer: {
    paddingLeft: scale(0),
    paddingTop: scale(4),
    marginBottom: scale(30),
  },
  contentContainer: {
    alignSelf: 'center',
    marginBottom: verticalScale(20),
  },
  inputContainer: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 25,
    color: theme.white,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 20,
    color: theme.white,
    marginBottom: scale(15),
    marginTop: scale(35),
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 15,
    color: theme.white,
  },
  underlinedText: {
    textDecorationLine: 'underline',
    fontSize: 15,
    color: theme.white,
  },
  registerText: {
    color: theme.white,
    fontSize: 15,
    textDecorationLine: 'underline',
    marginTop: scale(20),
  },
  termcondContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: scale(10),
    marginTop: scale(22),
  },
  bottomTextContainer: {
    alignItems: 'center',
    padding: scale(20),
  },
});
