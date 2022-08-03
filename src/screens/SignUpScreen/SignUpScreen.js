import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialButtons from '../../components/SocialButtons';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn("Registered");
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot password pressed')
        navigation.navigate("ForgotPassword")
    }

    const onTermsOfUsePressed = () => {
        console.warn('Terms of Use link')
    }
    const onPrivacyPressed = () => {
        console.warn('Privacy policies Link')
    }
    const returnSignIn = () => {    
        console.warn('return to sign in page')
        navigation.navigate("SignIn")
    }

    return (
        <ScrollView>

        <View style={styles.root}> 
            <Text style={styles.title}> Create An Account </Text>
            <CustomInput 
                placeholder="Username"
                value={username} 
                setValue={setUsername}
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomInput 
                placeholder="Confirm Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Register" 
                onPress={onRegisterPressed} 
                type='PRIMARY'
            />
            <Text style={styles.text}>
                 By registering, you confirm that you accept our{' '} 
                 <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '} 
                 <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>.
            </Text>

            <SocialButtons />
            
            <CustomButton 
                text="Forgot password?" 
                onPress={onForgotPasswordPressed} 
                type='TERTIARY' 
            />
            
            <CustomButton 
                text="Return to Sign In" 
                onPress={returnSignIn} 
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },

})

export default SignUpScreen