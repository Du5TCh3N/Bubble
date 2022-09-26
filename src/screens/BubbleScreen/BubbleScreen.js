import React from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph} from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Import components
 */
import ContentGrid from "../../components/ContentGrid";
import ContentPage from "../../components/ContentPage";
import SearchBar from "../../components/SearchBar";

const bubbleList = [
  {key: '1', name: 'Come Drink!', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '2', name: 'Come Drink 1', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '3', name: 'Come Drink 2', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '4', name: 'Come Drink 3', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '5', name: 'Come Drink 4', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '6', name: 'Come Drink 5', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '7', name: 'Come Drink 6', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '8', name: 'Come Drink 7', img: 'https://picsum.photos/700', description: "lorem piscum"},
]

const BubbleStack = createStackNavigator();

function BubbleScreen() {

  return (
      <BubbleStack.Navigator>
        {/* <BubbleStack.Screen name="Home" component={ContentGrid}/> */}
        {/* <BubbleStack.Screen name="Home" component={ContentPage}/> */}
        <BubbleStack.Screen name="Home" component={BubbleHomeScreen}/>
        {/* <BubbleStack.Screen name="Home" component={BubbleDetailScreen}/> */}
        <BubbleStack.Screen name="Detail" component={BubbleDetailScreen}/>
      </BubbleStack.Navigator>
      
  );
};

function BubbleHomeScreen() {
  return (
    <ContentGrid onClickFunction={() => this.props.navigation.navigate('Detail')}></ContentGrid>
  )
}

function BubbleDetailScreen() {
  return (
    <ContentPage></ContentPage>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  gridView: {
      marginTop: 0,
      flex: 1,
  },
});

export default BubbleScreen;