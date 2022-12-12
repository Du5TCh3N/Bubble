import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

const ConfirmScreen = () => {
    const [code, setCode] = useState('');

    const {height} = useWindowDimensions();

    const onConfirmPressed = () => {
        console.warn("Confirmed code");
    }
    const onReturnPressed = () => {
        console.warn("Return to Sign In");
    }
    const onResendPressed = () => {
        console.warn("Resent Code");
    }
    return (
        <ScrollView>

        <View style={styles.root}> 
            <Text style={styles.title}> Confirm Email </Text>
            <CustomInput
                placeholder="Enter your confirmation code"
                value={code}
                setValue={setCode}
            />
            
            <CustomButton 
                text="Confirm" 
                onPress={onConfirmPressed} 
                type='PRIMARY'
            />
            <CustomButton 
                text="Resend Code" 
                onPress={onResendPressed} 
                type='SECONDARY'
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

export default ConfirmScreen