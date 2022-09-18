import React from "react";
import { View, Text } from "react-native";
import CustomChatUser from '../../components/CustomChatUser';
import CustomUserDetail from '../../components/CustomUserDetail';
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

function MapScreen() {
  return (
    // <View
    //   style={{
    //     flexDirection: "row",
    //     height: 100,
    //     padding: 20
    //   }}
    // >
    //   <Text>Map Screen</Text>
    // </View>
    <View>
      <CustomUserDetail
        users={defaultUsers}
      />
    </View>
  );
};

export default MapScreen;