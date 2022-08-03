import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TabBarIOSItem, TouchableOpacity} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import EventScreen from './src/screens/EventScreen';
import GroupScreen from './src/screens/GroupScreen';
import ChatApp from './src/ChatApp';

const Tab = createBottomTabNavigator();


function EventsScreen() {
  return (
    <EventScreen></EventScreen>
  );
}

function GroupsScreen() {
  return (
    <GroupScreen></GroupScreen>
  );
}

function ChatScreen() {
  return <ChatApp />;
}


function ProfileScreen() {
  return (
    // old code: view style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    <View> 
      <SafeAreaView style={styles.root}>
        <SignInScreen></SignInScreen>
      </SafeAreaView>
    </View>
  );
}

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Events') {
              iconName = focused
                ? 'calendar'
                : 'calendar-outline';
            } else if (route.name === 'Group') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Group" component={GroupScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
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
