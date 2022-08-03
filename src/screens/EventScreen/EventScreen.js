import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TabBarIOSItem, TouchableOpacity} from 'react-native';

const EventScreen = () => {
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c', description: 'Hello' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
        { name: 'WET ASPHALT', code: '#34495e' },
        { name: 'GREEN SEA', code: '#16a085' },
        { name: 'NEPHRITIS', code: '#27ae60' },
        { name: 'BELIZE HOLE', code: '#2980b9' },
        { name: 'WISTERIA', code: '#8e44ad' },
        { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
        { name: 'SUN FLOWER', code: '#f1c40f' },
        { name: 'CARROT', code: '#e67e22' },  
        { name: 'ALIZARIN', code: '#e74c3c' },
        { name: 'CLOUDS', code: '#ecf0f1' },
        { name: 'CONCRETE', code: '#95a5a6' },
        { name: 'ORANGE', code: '#f39c12' },
        { name: 'PUMPKIN', code: '#d35400' },
        { name: 'POMEGRANATE', code: '#c0392b' },
        { name: 'SILVER', code: '#bdc3c7' },
        { name: 'ASBESTOS', code: '#7f8c8d' },
      ]);
    
      return (
        <FlatGrid
        itemDimension={150}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card>
              <Card.Title title= {item.name} subtitle= {item.code}/>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Content>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        
        )}
        />
      );
}
// const EventScreens = {
//   EventHome: {
//     screen: EventDetail
//   }, 
//   EventDetail: {
//     screen: EventDefault
//   }
// }

// const EventStack = createStackNavigator(EventScreens);

// function EventDetail() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Nearby!</Text>
//     </View>
//   );
// }

// function EventScreen() {
//   <EventStack />
// }

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

  export default EventScreen