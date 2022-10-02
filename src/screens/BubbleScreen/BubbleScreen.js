import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import { Card, Title, Paragraph, IconButton, Badge, TextInput} from 'react-native-paper';
import BlankSpacer from "react-native-blank-spacer";

import SearchBar from "../../components/SearchBar";

const dummyBubbles = [
  {key: '1', name: 'Come Drink!', img: 'https://picsum.photos/700', description: "lorem piscum", member_id: ["1", "2"], num_Members: "2", owner_id: "0", owner_name: "Charles Yu", owner_location: "London"},
  {key: '2', name: 'Come Drink 1', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '3', name: 'Come Drink 2', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '4', name: 'Come Drink 3', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '5', name: 'Come Drink 4', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '6', name: 'Come Drink 5', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '7', name: 'Come Drink 6', img: 'https://picsum.photos/700', description: "lorem piscum"},
  {key: '8', name: 'Come Drink 7', img: 'https://picsum.photos/700', description: "lorem piscum"},
]

const dummyUsers = [
  {id: "0", name: "Charles Yu", img: "https://picsum.photos/700", liked: ["1"], starred: []}
]

const BubbleStack = createStackNavigator();

function getUserName(id) {
  dummyUsers[id].name
}

function BubbleScreen() {
  return (
    <BubbleStack.Navigator>
      <BubbleStack.Screen name="Home" component={BubbleHomeScreen}/>
      <BubbleStack.Screen name="Detail" component={BubbleDetailScreen}/>
      <BubbleStack.Screen name="Image" component={BubbleImageScreen}/>
      <BubbleStack.Screen name="Users" component={BubbleUsersScreen}/>
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
                        <Paragraph>{ item.owner_name }</Paragraph>
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

  const [text, setText] = React.useState("");

  // getUserName()

  return (
      <ScrollView>
          <BlankSpacer height={2}/>
          <Card>
              <TouchableOpacity onPress={() => navigation.navigate("Users", {item})}>
                <Card.Title 
                  title={item.owner_name} 
                  subtitle={item.owner_location}
                  titleVariant="titleMedium"
                  subtitleVariant="bodySmall"
                  right={(props) => <View><Text>Number of Users</Text><Badge>{item.num_Members}</Badge>
                    </View>}
                />
              </TouchableOpacity>
                
              <TouchableOpacity onPress={() => navigation.navigate('Image', { item })}>
                  <Card.Cover source = {{ uri: item.img }}/>
              </TouchableOpacity>
              <Card.Title title={item.name} titleVariant="headlineLarge"/>
              <Card.Actions alignItems="flex-end">
                  <IconButton icon= "thumb-up-outline" onPress={() => console.log('Liked')} mode="contained"/>
                  <IconButton icon= "share-outline" onPress={() => console.log('Shared')}/>
                  <IconButton icon= "chat-outline" onPress={() => console.log('Chat')}/>
                  <IconButton icon= "plus" onPress={() => console.log('Saved')}/>
            </Card.Actions>
            <Card.Content>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
          </Card>
          <BlankSpacer height={2}/>
          <Card>
            <Card.Title title={"Comment"} titleVariant="labelLarge"/>
            <TextInput
              label="Comment..."
              value={text}
              onChangeText={text => setText(text)}
            />
          </Card>
      </ScrollView>
  )
}

function BubbleImageScreen({ route, navigation }) {
  const { item } = route.params;
  console.log(item)
  const {uri} = item.img;
  console.log(uri)

  return (
    <View>
      {/* <Image
        source={{uri: item.img }}
      /> */}
      <Image
        // style={{width: '100%', height: '100%'}}
        // source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
        source={{uri: item.img}}
      />
      <Text>Image</Text>
    </View>
  )
}

function BubbleUsersScreen({route, navigation }) {
  return (
    <ScrollView>

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
      borderWidth: 0
  },
  redBorder: {
      borderColor: "red",
      borderWidth: 4,
  }
});

export default BubbleScreen;