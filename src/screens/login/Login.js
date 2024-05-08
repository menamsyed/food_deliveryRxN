import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import BottomButton from '../../components/BottomButton'

const Login = () => {
  return (
    
    <SafeAreaView>
        <View></View>
        <View>
            <Text>What's your mobile number?</Text>
            <Text>Please enter your phone number and tap 'Login' to verify.</Text>
        </View>

        <View>
            <Text>Enter your mobile number</Text>
            <CustomInput/>
        </View>
        <BottomButton/>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})