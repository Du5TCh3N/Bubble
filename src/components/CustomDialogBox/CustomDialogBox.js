import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const CustomDialogBox = () => {
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  return (
    <>
      <GiftedChat
        alwaysShowSend
        renderSend={renderSend}
      />
    </>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    height: 41,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: '17px',
  }
});

export default CustomDialogBox