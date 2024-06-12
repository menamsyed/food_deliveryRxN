import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import PhoneSignin from './PhoneSignin';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        Alert.alert('Sucessfully logged in!');
        console.log(response, 'this is response duh');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('you have have entered a wrong password!');
        }
        console.log(error, 'this is error');
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Login Screen</Text>
      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        placeholder="Email"
        style={styles.inputBox}
      />
      <TextInput
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder="Password"
        style={styles.inputBox}
      />
      <TouchableOpacity onPress={onLogin} style={styles.register}>
        <Text style={styles.registerTitle}>Login</Text>
      </TouchableOpacity>
      <PhoneSignin/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 12,
    borderRadius: 5,
    width: '90%',
    marginTop: 20,
  },
  register: {
    width: '90%',
    backgroundColor: '#FCAF03',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 40,
  },
  registerTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  signup: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
    marginBottom: 80,
  },
});

export default LoginScreen;
