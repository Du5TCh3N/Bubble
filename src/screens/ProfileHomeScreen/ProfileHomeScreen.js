import { View, Text } from 'react-native'
import React from 'react'
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import ConfirmScreen from '../ConfirmScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import NewPasswordScreen from '../NewPasswordScreen';
import EventScreen from '../EventScreen/EventScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../ProfileScreen';

const profileStack = createStackNavigator();

const ProfileHomeScreen = () => {
  return (
    <profileStack.Navigator screenOptions={{headerShown: false}}> 
        <profileStack.Screen name="SignIn" component={SignInScreen} />
        <profileStack.Screen name="SignUp" component={SignUpScreen} />
        <profileStack.Screen name="Confirm" component={ConfirmScreen} />
        <profileStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <profileStack.Screen name="NewPassword" component={NewPasswordScreen} />
        <profileStack.Screen name="Profile" component={ProfileScreen} />
        <profileStack.Screen name="Home" component={EventScreen} />

    </profileStack.Navigator>
  )
}

export default ProfileHomeScreen