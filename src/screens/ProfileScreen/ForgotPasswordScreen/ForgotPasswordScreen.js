import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const {height} = useWindowDimensions();

    const navigation = useNavigation();


    const onSendPressed = () => {
        console.warn("Sent Email to reset password.");
    }
    const onReturnPressed = () => {
        console.warn("Return to Sign In");
        navigation.navigate("SignIn");
    }

    return (
        <ScrollView>

        <View style={styles.root}> 
            <Text style={styles.title}> Reset Your Password </Text>
            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            
            <CustomButton 
                text="Send" 
                onPress={onSendPressed} 
                type='PRIMARY'
            />
            <CustomButton 
                text="Return to Sign In" 
                onPress={onReturnPressed} 
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

export default ForgotPasswordScreen