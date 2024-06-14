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
//yeh registration ki hy bss, mtlb yeh hua k FB pe yeh email/pass register hogyab hy. smjhay DAYA?
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('user account created ;)');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
       console.error(error)
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up Screen</Text>
      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        placeholder="Email"
        style={styles.inputBox}
      />
      <TextInput
        onChangeText={value => setPassword(value)}
        value={password}
        placeholder="Password"
        style={styles.inputBox}
      />
      <TouchableOpacity onPress={onRegister} style={styles.register}>
        <Text style={styles.registerTitle}>Register</Text>
      </TouchableOpacity>
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

export default SignUpScreen;
