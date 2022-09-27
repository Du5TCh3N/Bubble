import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import { Card, Title, Paragraph, IconButton} from 'react-native-paper';

import SearchBar from "../../components/SearchBar";

const dummyBubbles = [
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
      <BubbleStack.Screen name="Home" component={BubbleHomeScreen}/>
      <BubbleStack.Screen name="Detail" component={BubbleDetailScreen}/>
    </BubbleStack.Navigator>
  );
};

function BubbleHomeScreen({ navigation }) {

  const getHeader = () => {
    return (
      <View>
        <SearchBar></SearchBar>
      </View>
    )
  }

  return (
    <FlatGrid
        itemDimension={150}
        data={dummyBubbles}
        style={styles.gridView}
        spacing={2}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
                <Card>
                    <Card.Cover source={{ uri: item.img }} />
                    <Card.Title title= {item.name} subtitle= {item.code}/>
                    <Card.Content>
                        <Paragraph>{item.description}</Paragraph>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        )}
        ListHeaderComponent={getHeader}
    />
  );   
}

function BubbleDetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
      <ScrollView>
          <Card>
              <Card.Title title={item.name} />
              <TouchableOpacity>
                  <Card.Cover source = {{ uri: item.img }}/>
              </TouchableOpacity>
              <Card.Actions alignItems="flex-end">
                  <IconButton icon= "thumb-up-outline" onPress={() => console.log('Liked')}/>
                  <IconButton icon= "share-outline" onPress={() => console.log('Shared')}/>
                  <IconButton icon= "chat-outline" onPress={() => console.log('Chat')}/>
                  <IconButton icon= "plus" onPress={() => console.log('Saved')}/>
            </Card.Actions>
            <Card.Content>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <View>
              <Text>Comment</Text>
            </View>
            <Card.Content>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
          </Card>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  gridView: {
      marginTop: 0,
      flex: 1,
      width: '100%',
  },
  redBorder: {
      borderColor: "red",
      borderWidth: 4,
  }
});

export default BubbleScreen;