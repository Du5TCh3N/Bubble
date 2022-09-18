import React from "react";
import { View, Text } from "react-native";
import CustomDialogBox from '../../components/CustomDialogBox';
import CustomChatUser from '../../components/CustomChatUser';
const defaultUsers = [
  {
    id: 1, 
    name: 'Alex', 
    avatar: 'https://placeimg.com/140/140/any',
    messageTime: '4 mins ago',
    messageText:'Hey there, this is my test for a post of my social app in React Native.',
  },

  {
    id: 2, 
    name: 'Sara', 
    avatar: 'https://placeimg.com/140/140/any',
    messageTime: '4 mins ago',
    messageText:'Hey there, this is my test for a post of my social app in React Native.',
  },

  {
    id: 3, 
    name: 'Michael', 
    avatar: 'https://placeimg.com/140/140/any',
    messageTime: '4 mins ago',
    messageText:'Hey there, this is my test for a post of my social app in React Native.',
  },

];
function BubbleScreen() {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <Text>Bubble Screen</Text>
    </View>
    
  );
};

export default BubbleScreen;