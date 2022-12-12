import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

const NewPasswordScreen = () => {
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const {height} = useWindowDimensions();

    const onSubmitPressed = () => {
        console.warn("Succesfully Changed Password");
    }
    const onReturnPressed = () => {
        console.warn("Return to Sign In");
    }

    return (
        <ScrollView>

        <View style={styles.root}> 
            <Text style={styles.title}> Reset Your Password </Text>
            <CustomInput
                placeholder="Enter your confirmation code"
                value={code}
                setValue={setCode}
            />
            <CustomInput
                placeholder="Enter your new password"
                value={password}
                setValue={setPassword}
            />
            
            <CustomButton 
                text="Submit" 
                onPress={onSubmitPressed} 
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

export default NewPasswordScreen