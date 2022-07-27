import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, Button, TextInput, TabBarIOSItem} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function EventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Event!</Text>
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.red_box}>
    //     Open up App.js to start working on your app!
    //   </Text>
    //   <Button title='Click Me'/>
    //   <TextInput></TextInput>
    //   <StatusBar style="auto" />
    //   <View>
    //     <Tab.Navigator>
    //       <Tab.Screen name="Home" component={HomeScreen} />
    //       <Tab.Screen name="Settings" component={SettingsScreen} />
    //     </Tab.Navigator>
    //   </View>
    // </View>
  );
}

function NearbyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nearby!</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
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

            if (route.name === 'Event') {
              iconName = focused
                ? 'calendar'
                : 'calendar-outline';
            } else if (route.name === 'Nearby') {
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
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Nearby" component={NearbyScreen} />
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
  }
});
