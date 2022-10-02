import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Title, Paragraph, MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
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
// import CalendarScreen from './src/screens/CalendarScreen';

const Tab = createBottomTabNavigator();

function Bubbles() {
  return (
    <BubbleScreen></BubbleScreen>
  );
}

function Maps() {
  return (
    <MapScreen></MapScreen>
  );
}

function Create() {
  return (
    <NewBubbleScreen></NewBubbleScreen>
  )
}

function Chats() {
  return <ChatScreen></ChatScreen>;
}


function Profile() {
  return (
    <ProfileScreen></ProfileScreen>
  );
}

function App() {
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
        <Tab.Screen name="Bubble" component={Bubbles} />
        <Tab.Screen name="Map" component={Maps} />
        <Tab.Screen name="Add" component={Create} />
        <Tab.Screen name="Chat" component={Chats} />
        <Tab.Screen name="My Space" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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

const theme = {
  ...DefaultTheme,
  roundness: 12,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3'
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}