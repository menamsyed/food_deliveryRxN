import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';

const PhoneSignin = () => {
  const [confirm, setConfirm] = useState(null);
  console.log(confirm, 'confirm');

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }
  return (
    <View>
      <Button
        title="Phone number signin"
        onPress={() => {
          signInWithPhoneNumber('+1 650-555-3434');
           
        }}
      />
    </View>
  );
};

export default PhoneSignin;
