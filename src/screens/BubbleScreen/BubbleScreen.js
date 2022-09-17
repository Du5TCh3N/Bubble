import React from "react";
import { View, Text } from "react-native";
import CustomDialogBox from '../../components/CustomDialogBox';

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
      <CustomDialogBox></CustomDialogBox>
    </View>
    
  );
};

export default BubbleScreen;