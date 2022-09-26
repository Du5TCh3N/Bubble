import React, {Component} from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { Card, Title, Paragraph} from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

import SearchBar from "../../components/SearchBar";

const bubbleList = [
    {key: '1', name: 'Come Drink!', img: 'https://picsum.photos/700', description: "lorem piscum"},
    {key: '2', name: 'Come Drink 1', img: 'https://picsum.photos/700', description: "lorem piscum"},
    {key: '3', name: 'Come Drink 2', img: 'https://picsum.photos/700', description: "lorem piscum"},
    {key: '4', name: 'Come Drink 3', img: 'https://picsum.photos/700', description: "lorem piscum"},
    {key: '5', name: 'Come Drink 4', img: 'https://picsum.photos/700', description: "lorem piscum"},
    {key: '6', name: 'Come Drink 5', img: 'https://picsum.photos/700', description: "lorem piscum"},
]

function ContentGrid(onClickFunction) {

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
                data={bubbleList}
                style={styles.gridView}
                spacing={2}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onClickFunction}>
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

export default ContentGrid
