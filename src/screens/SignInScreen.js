import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../assets/imgOne.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In");
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot password pressed')
    }

    const onNoAccount = () => {
        console.warn('User needs to create an account')
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
            <CustomButton
                text="Don't have an account?"
                onPress={onSignInPressed}
                type='TERTIARY'
            />

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