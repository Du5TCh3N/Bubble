import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput, TabBarIOSItem} from 'react-native';

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
      <Text>Settings!</Text>
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={EventScreen} />
        <Tab.Screen name="Settings" component={NearbyScreen} />
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
