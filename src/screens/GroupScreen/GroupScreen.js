import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TabBarIOSItem, TouchableOpacity} from 'react-native';

const GroupStack = createStackNavigator();

function GroupHome({ navigation }) {
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c', description: 'Hello', key: '1', img: 'https://picsum.photos/700' },
        { name: 'EMERALD', code: '#2ecc71', key: '2', img: 'https://picsum.photos/700' },
        { name: 'PETER RIVER', code: '#3498db', key: '3', img: 'https://picsum.photos/700' },
        { name: 'AMETHYST', code: '#9b59b6', key: '4', img: 'https://picsum.photos/700' },
        { name: 'WET ASPHALT', code: '#34495e', key: '5', img: 'https://picsum.photos/700' },
        { name: 'GREEN SEA', code: '#16a085', key: '6', img: 'https://picsum.photos/700' },
        { name: 'NEPHRITIS', code: '#27ae60', key: '7', img: 'https://picsum.photos/700' },
        { name: 'BELIZE HOLE', code: '#2980b9', key: '8', img: 'https://picsum.photos/700' },
        { name: 'WISTERIA', code: '#8e44ad', key: '9', img: 'https://picsum.photos/700' },
        { name: 'MIDNIGHT BLUE', code: '#2c3e50', key: '10', img: 'https://picsum.photos/700' },
        { name: 'SUN FLOWER', code: '#f1c40f', key: '11', img: 'https://picsum.photos/700' },
        { name: 'CARROT', code: '#e67e22', key: '12', img: 'https://picsum.photos/700' },  
        { name: 'ALIZARIN', code: '#e74c3c', key: '13', img: 'https://picsum.photos/700' },
        { name: 'CLOUDS', code: '#ecf0f1', key: '14', img: 'https://picsum.photos/700' },
        { name: 'CONCRETE', code: '#95a5a6', key: '15', img: 'https://picsum.photos/700' },
        { name: 'ORANGE', code: '#f39c12', key: '16', img: 'https://picsum.photos/700' },
        { name: 'PUMPKIN', code: '#d35400', key: '17', img: 'https://picsum.photos/700' },
        { name: 'POMEGRANATE', code: '#c0392b', key: '18', img: 'https://picsum.photos/700' },
        { name: 'SILVER', code: '#bdc3c7', key: '19', img: 'https://picsum.photos/700' },
        { name: 'ASBESTOS', code: '#7f8c8d', key: '20', img: 'https://picsum.photos/700' },
      ]);
    
      return (
        <FlatGrid
        itemDimension={150}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
            <Card>
              <Card.Title title= {item.name} subtitle= {item.code}/>
              <Card.Cover source={{ uri: item.img }} />
              <Card.Content>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        
        )}
        />
      );
}   

function GroupDetail({ route, navigation }) {
    const { item } = route.params;

    return (
        <View>
            <Card>
              <Card.Title title= {item.name} subtitle= {item.code}/>
              <Card.Cover source={{ uri: item.img }} />
              <Card.Actions alignItems="flex-end">
                <IconButton icon= "thumb-up-outline" onPress={() => console.log('Pressed')}/>
                <IconButton icon= "share-outline" onPress={() => console.log('Shared')}/>
                <IconButton icon= "chat-outline" onPress={() => console.log('Chat')}/>
                <IconButton icon= "plus" onPress={() => console.log('Saved')}/>
              </Card.Actions>
              <Card.Content>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
            </Card>
            <View></View>
            <Card>
                <Card.Content>
                    <Paragraph>Comments</Paragraph>
                </Card.Content>
            </Card>
        </View>
  );
}

function GroupScreen() {
  return (
    <GroupStack.Navigator>
        <GroupStack.Screen name="Home" component={GroupHome}/>
        <GroupStack.Screen name="Detail" component={GroupDetail}/>
    </GroupStack.Navigator>
  )
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

  export default GroupScreen