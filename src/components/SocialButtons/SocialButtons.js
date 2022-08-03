import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialButtons = () => {

    const onSignInGoogle = () => {
        console.warn('Sign in through Google');
    }
    const onSignInFacebook = () => {
        console.warn('Sign in through Facebook');
    }
    return (
        <>
        <CustomButton
            text="Sign In with Facebook"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
        />
        <CustomButton
            text="Sign In with Google"
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
        />
        </>
    )
}

export default SocialButtons