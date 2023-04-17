import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../../assets/imgOne.png';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialButtons from '../../../components/SocialButtons';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

function SignOutButton() {
    const { signOut } = useAuthenticator();
    return <Button title="Sign Out" onPress={signOut} />;
  }

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign In");
        navigation.navigate('Profile');
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot password pressed');
        navigation.navigate('ForgotPassword');
    }

    const onNoAccount = () => {
        console.warn('User needs to create an account');
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView>

        <View style={styles.root}> 
            <Image 
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
            />
            <CustomInput 
                placeholder="Username"
                value={username} 
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Log In" 
                onPress={onSignInPressed} 
                type='PRIMARY'
            />
            <CustomButton 
                text="Forgot password?" 
                onPress={onForgotPasswordPressed} 
                type='TERTIARY' 
            />
            <SocialButtons />
            <CustomButton
                text="Don't have an account?"
                onPress={onNoAccount}
                type='TERTIARY'
            />
            <SignOutButton/>

        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        maxWidth: 200,
        maxHeight: 200,
    } 
})

export default SignInScreen