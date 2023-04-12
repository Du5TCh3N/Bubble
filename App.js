import { Amplify, Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { Bubble } from './src/models';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TabBarIOSItem, TouchableOpacity} from 'react-native';
// import ProfileHomeScreen from './src/screens/ProfileHomeScreen';
// import EventScreen from './src/screens/EventScreen';
// import GroupScreen from './src/screens/GroupScreen';
import BubbleScreen from './src/screens/BubbleScreen';
import MapScreen from './src/screens/MapScreen';
import NewBubbleScreen from './src/screens/NewBubbleScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
// import { Bubble } from 'react-native-gifted-chat';
// import CalendarScreen from './src/screens/CalendarScreen';

import 'core-js/features/symbol/async-iterator';
import 'regenerator-runtime/runtime';

const Tab = createBottomTabNavigator();

function App() {
  const [dummyBubbles, setDummyBubbles] = useState([
    {key: 0, name: 'Come Drink!', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink", 'play'], start_date: "2022-10-02", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen", "Bowen Zhu", "Robert Tan"]},
    {key: 1, name: 'Come Drink 1', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink"], start_date: "2022-10-01", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
    {key: 2, name: 'Come Drink 2', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink"], start_date: "2022-09-30", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
    {key: 3, name: 'Come Drink 3', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["drink"], start_date: "2022-09-30", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
    {key: 4, name: 'Come Drink 4', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], start_date: "2022-09-29", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
    {key: 5, name: 'Come Drink 5', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], start_date: "2022-09-28", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
    {key: 6, name: 'Come Drink 6', img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], start_date: "2022-09-27", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
    {key: 7, name: "Let's play something", img: 'https://picsum.photos/700', imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], description: "lorem piscum", space: " ", tags: ["play"], start_date: "2022-09-27", end_date: "2022-10-02", creator_name: "Charles Yu", creator_location: "London, UK", members: ["Guangzhong Chen"]},
  ]);

  useEffect(() => {
    async function fetchBubbles() {
      try {
        console.log('Fetching bubbles...');
        // Fetch all bubbles from the Bubble table
        const bubbles = await DataStore.query(Bubble);
        console.log('Fetched bubbles:', bubbles);
        // Update the dummyBubbles state with the fetched bubbles
        setDummyBubbles(bubbles);
      } catch (error) {
        console.error('Error fetching bubbles:', error);
      }
    }
  
    fetchBubbles();
  }, []);

  function FunctionBubblesScreen() {
    return (      
      <BubbleScreen bubbles ={ dummyBubbles } setBubble={ setDummyBubbles }></BubbleScreen>
    );
  }
  
  function FunctionMapsScreen() {
    return (
      <MapScreen></MapScreen>
    );
  }
  
  function FunctionCreateScreen() {
    return (
      <NewBubbleScreen bubbles ={ dummyBubbles } setBubble={ setDummyBubbles }></NewBubbleScreen>
    )
  }
  
  function FunctionChatsScreen() {
    return <ChatScreen></ChatScreen>;
  }
  
  
  function FunctionProfileScreen() {
    return (
      <ProfileScreen></ProfileScreen>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Bubble') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
            } else if (route.name === 'My Space') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === "Schedule") {
              iconName = focused 
                ? 'time' 
                : 'time-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Bubble" component={FunctionBubblesScreen} />
        <Tab.Screen name="Map" component={FunctionMapsScreen} />
        <Tab.Screen name="Add" component={FunctionCreateScreen} />
        <Tab.Screen name="Chat" component={FunctionChatsScreen} />
        <Tab.Screen name="My Space" component={FunctionProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default withAuthenticator(App)
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  red_box: {
    borderWidth: 2,
    borderColor: '#ff0000',
    padding: 16
  }, 

  gridView: {
    marginTop: 0,
    flex: 1,
  },

  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 0,
    padding: 0,
    height: 220, // Modify this to change height of card
  },

  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '1200',
  },

  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
