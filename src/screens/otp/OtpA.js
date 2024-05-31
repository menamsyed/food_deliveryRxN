import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import CodeInput from 'react-native-code-input';
import CustomStatusBar from '../../components/CustomStatusBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigationHandler} from '../../routes/NavigationHandler';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT} from '../../utils/helperFunction';

const OtpA = () => {
  const navigation = useNavigationHandler();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar statusBarColor={theme.black} />
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Enter your code</Text>
          <Text style={styles.subText}>
            Enter 6 digit verification code, sent to your mobile number
          </Text>
          <View style={styles.iconContainer}>
            <Text style={styles.numberText}>03333333333</Text>
            <Pressable onPress={() => {}}>
              <Feather size={15} color={theme.white} name="edit" />
            </Pressable>
          </View>
        </View>
        <CodeInput
          inputPosition="center"
          codeLength={6}
          containerStyle={styles.codeInputview}
          codeInputStyle={styles.codeInput}
          onFulfill={() => {
            navigation.navigateTo('home');
          }}
          autoFocus={true}
          ignoreCase={true}
        />
        <View style={styles.buttonContainer}>
          <Text style={styles.underlinedText}>Did'nt recieve a code?</Text>
          <ResendOTPButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ResendOTPButton = () => {
  return (
    <TouchableOpacity style={styles.resendButtonContainer}>
      <Text style={styles.buttonText}>Resend Code</Text>
    </TouchableOpacity>
  );
};

export default OtpA;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    paddingHorizontal: scale(25),
    backgroundColor: theme.black,
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    marginTop: 40,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '33%',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    marginTop: scale(15),
  },
  resendButtonContainer: {
    backgroundColor: theme.secondaryColor,
    height: scale(28),
    width: '70%',
    borderRadius: scale(5),
    marginTop: 5,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 13,
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.white,
  },

  codeInputview: {
    marginTop: scale(15),
    flex: 0.1,
    alignSelf: 'center',
  },
  codeInput: {
    fontWeight: 'bold',
    fontSize: scale(20),
    borderRadius: 10,
    color: theme.black,
    backgroundColor: theme.white,
    borderWidth: 0.5,
    borderColor: theme.black,
    height: SCREEN_HEIGHT / 15,
    width: SCREEN_HEIGHT / 18,
  },
  headerText: {
    fontSize: 25,
    color: theme.white,
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
    textAlign: 'center',
  },
  numberText: {
    fontSize: 15,
    color: theme.white,
    fontWeight: 'bold',
  },
});
