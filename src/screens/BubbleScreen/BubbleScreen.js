import React from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph} from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

/**
 * Import components
 */
import ContentGrid from "../../components/ContentGrid";
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

function BubbleScreen() {

  return (
      <ContentGrid></ContentGrid>
      
  );
};

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