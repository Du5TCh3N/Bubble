import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialButtons = () => {

    const onSignInGoogle = () => {
        console.warn('Sign in through Google');
    }
    const onSignInWechat = () => {
        console.warn('Sign in through Facebook');
    }
    return (
        <>
        <CustomButton
            text="Sign In with WeChat"
            onPress={onSignInWechat}
            bgColor="#5CC928"
            fgColor="#FCFDFD"
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