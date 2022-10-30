import { View, Text } from 'react-native'
import React from 'react'
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ConfirmScreen from './ConfirmScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen'
import NewPasswordScreen from './NewPasswordScreen';
import MyProfileScreen from './MyProfileScreen';

import { createStackNavigator } from '@react-navigation/stack';

const profileStack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <profileStack.Navigator screenOptions={{headerShown: false}}> 
        <profileStack.Screen name="SignIn" component={SignInScreen} />
        <profileStack.Screen name="SignUp" component={SignUpScreen} />
        <profileStack.Screen name="Confirm" component={ConfirmScreen} />
        <profileStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <profileStack.Screen name="NewPassword" component={NewPasswordScreen} />
        <profileStack.Screen name="Profile" component={MyProfileScreen} />

    </profileStack.Navigator>
  )
}

export default ProfileScreen