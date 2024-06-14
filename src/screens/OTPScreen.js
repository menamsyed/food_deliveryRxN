import {View, TextInput , Button} from 'react-native';
import React, { useState } from 'react';

const OTPScreen = (props) => {
    const {confirm} = props;
    const [code,setCode] = useState('')
    console.log(code,'codeee');

    async function confirmCode(confirm) {
        try {
          await confirm.confirm(code);
        } catch (error) {
          console.log('Invalid code.');
        }
      }
  return (
    <View>
      <TextInput  style={{width:'80%', borderColor:'black',borderWidth:2}} value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode(confirm)} />
    </View>
  );
};

export default OTPScreen;
