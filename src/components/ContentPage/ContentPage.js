import React, {Comonent} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text} from 'react-native';
import {Card, Title, Paragraph, IconButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const testBubble = {key: '1', name: 'Come Drink!', img: 'https://picsum.photos/700', description: "lorem piscum"}

function ContentPage({ route, navigation }) {
    // const { item } = route.params;

    return (
        <ScrollView>
            <Card>
                <Card.Title title={testBubble.name} />
                <TouchableOpacity>
                    <Card.Cover source = {{ uri: testBubble.img }}/>
                </TouchableOpacity>
                <Card.Actions alignItems="flex-end">
                    <IconButton icon= "thumb-up-outline" onPress={() => console.log('Liked')}/>
                    <IconButton icon= "share-outline" onPress={() => console.log('Shared')}/>
                    <IconButton icon= "chat-outline" onPress={() => console.log('Chat')}/>
                    <IconButton icon= "plus" onPress={() => console.log('Saved')}/>
              </Card.Actions>
              <Card.Content>
                <Paragraph>{testBubble.description}</Paragraph>
              </Card.Content>
              <View>
                <Text>Comment</Text>
              </View>
              <Card.Content>
                <Paragraph>{testBubble.description}</Paragraph>
              </Card.Content>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

});

export default ContentPage;