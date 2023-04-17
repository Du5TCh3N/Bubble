import { View, Text } from 'react-native'
import React from 'react'
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ConfirmScreen from './ConfirmScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen'
import NewPasswordScreen from './NewPasswordScreen';
import MyProfileScreen from './MyProfileScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

const profileStack = createStackNavigator();

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

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