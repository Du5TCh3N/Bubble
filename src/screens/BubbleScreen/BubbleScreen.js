import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, Button, Alert, Dimensions,} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import { Card, Title, Paragraph, IconButton, Badge, TextInput} from 'react-native-paper';
import BlankSpacer from "react-native-blank-spacer";

import SearchBar from "../../components/SearchBar";

const dummyBubbles = [
  {key: 0, name: 'Come Drink!', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink", 'play'], date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen", "Bowen Zhu", "Robert Tan"]},
  {key: 1, name: 'Come Drink 1', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink"], date: "2022-10-01", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
  {key: 2, name: 'Come Drink 2', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink"], date: "2022-09-30", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
  {key: 3, name: 'Come Drink 3', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink"], date: "2022-09-30", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
  {key: 4, name: 'Come Drink 4', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], date: "2022-09-29", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
  {key: 5, name: 'Come Drink 5', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], date: "2022-09-28", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
  {key: 6, name: 'Come Drink 6', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], date: "2022-09-27", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
  {key: 7, name: 'Come Drink 7', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], date: "2022-09-27", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
]

const BubbleStack = createStackNavigator();

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const { width } = Dimensions.get('window');
const height = width * 0.6

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
        <View style={{backgroundColor: 'white',padding:6, marginBottom:10, justifyContent : 'row',flexDirection: "row"}}>
        <TouchableOpacity style={styles.button} onPress = {() => Alert.alert('综合推荐的的bubble')}>
            <Text>综合</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {() => Alert.alert('最热门的bubble')}>
            <Text>热门</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {() => Alert.alert('最新的bubble')}>
            <Text>最新</Text>
        </TouchableOpacity>
        </View> 
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
                        {/* <Paragraph style = {styles.tagItems}>{item.tag1}</Paragraph> */}
                        <View flexDirection="row">
                          {item.tags.map((tag) => (<Paragraph style={styles.tagItems} key={tag}>{tag}</Paragraph>))}
                        </View>
                        
                        <Text>{item.space}</Text>
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

  const images = [
    'https://picsum.photos/700', 
    'https://picsum.photos/700',
    'https://picsum.photos/700'
  ]

  const [imgActive, setImgActive] = React.useState(0);

  return (
      <ScrollView>
          <Card>
              <TouchableOpacity onPress={() => navigation.navigate("Users", {item})}>
                <Card.Title 
                  title={item.creator_name} 
                  subtitle={item.creator_location}
                  titleVariant="titleMedium"
                  subtitleVariant="bodySmall"
                  right={(props) => <View><Text>Number of Users</Text><Badge>{item.members.length}</Badge>
                    </View>}
                />
              </TouchableOpacity>

              <View style={{ width, height }}>
                <ScrollView pagingEnabled horizontal style={{ width, height }}>
                  {
                    item.imgs.map((image, index) => (
                      <Image key={index} source={{uri: image}} style={{width, height, resizeMode: 'cover' }}/>
                    ))
                  }
                </ScrollView>
              </View>
              
              <Card.Title title={item.name} />

              <Card.Actions alignItems="flex-end">
                  <IconButton icon= "thumb-up-outline" onPress={() => console.log('Liked')}/>
                  <IconButton icon= "share-outline" onPress={() => console.log('Shared')}/>
                  <IconButton icon= "chat-outline" onPress={() => console.log('Chat')}/>
                  <IconButton icon= "plus" onPress={() => console.log('Saved')}/>
            </Card.Actions>
            
            <Card.Content>
              <Paragraph>{item.description}</Paragraph>
              <BlankSpacer height={2}/>
              <View flexDirection="row">
                {item.tags.map((tag) => (<Paragraph style={styles.tagItems} key={tag}>{tag}</Paragraph>))}
              </View>
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
  const { item } = route.params;

  return (
    <ScrollView>
      <View flexDirection="column">
        {item.members.map((member) => (<Paragraph key={member}>{member}</Paragraph>))}
      </View>
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
  },

  tagItems: {
    backgroundColor: '#A8A5A5',
    color: '#F0EDED',
    fontSize: 12,
    display: 'flex',
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 11,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  button : {
    backgroundColor: '#F0EDED',
    color: '#949292',
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 11,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  wrap : {
    width: WIDTH, 
    height: HEIGHT * 0.25
  }, 
  wrapDot : {
    position: 'absolute', 
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive : {
    margin: 3,
    color: 'black'
  },
  dot : {
    margin: 3, 
    color: 'white'
  }
});

export default BubbleScreen;