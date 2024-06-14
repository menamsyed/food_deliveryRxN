import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';
import OTPScreen from './OTPScreen';

const PhoneSignin = () => {
  const [confirm, setConfirm] = useState(null);
  console.log(confirm, 'confirm');

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  
  return (
    <View>
      {confirm ? (
        <OTPScreen confirm={confirm} />
      ) : (
        <Button
          title="Phone number signin"
          onPress={() => {
            signInWithPhoneNumber('+923333333333');
          }}
        />
      )}
    </View>
  );
};

export default PhoneSignin;
