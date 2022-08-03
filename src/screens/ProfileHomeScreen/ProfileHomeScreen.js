import { View, Text } from 'react-native'
import React from 'react'
import SignInScreen from '../SignInScreen';
// import SignUpScreen from '../SignUpScreen';
// import ConfirmScreen from '../screens/ConfirmScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import NewPasswordScreen from '../screens/NewPasswordScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';


const profileStack = createStackNavigator;

function ProfileHomeScreen() {
  return (
    <profileStack.Navigator>
        <profileStack.Screen name="SignIn" component={SignInScreen} />
    </profileStack.Navigator>
  )
}

export default ProfileHomeScreen