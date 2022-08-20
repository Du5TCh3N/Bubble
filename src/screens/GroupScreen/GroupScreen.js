import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import CustomButton from '../../components/CustomButton';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TabBarIOSItem, TouchableOpacity, Image, ScrollView} from 'react-native';

const GroupStack = createStackNavigator();

function GroupHome({ navigation }) {
    const [items, setItems] = React.useState([
        { name: '篮球交流群', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'Victoria Park', description1: '篮球', description2: 'lol', space:' ', number: 125, key: '1',  img: 'https://picsum.photos/700' },
        { name: '麻将三缺一速来', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 2342342341, location: 'Holborn', description1: '麻将', description2: '三缺一', space:' ', key: '2', number: '2k', img: 'https://picsum.photos/700' },
        { name: '野球王', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'Holborn', description1: '篮球', description2: '野球', space:' ', key: '3', number: '1k', img: 'https://picsum.photos/700' },
        { name: '彩六拆迁小分队', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'London', description1: '彩虹六号', description2: '拆迁六号', space:' ', key: '4', number: '5k', img: 'https://picsum.photos/700' },
        { name: 'Apex狗熊', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'Mile End', description1: 'Apex 英雄', description2: '无敌满配电充', space:' ', key: '5', number: 65, img: 'https://picsum.photos/700' },
        { name: '阿巴巴', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '6', number: 876, img: 'https://picsum.photos/700' },
        { name: '452团建小分队', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '参考', description2: '参考', space:' ', key: '7', number: 452, img: 'https://picsum.photos/700' },
        { name: '62团建小分队', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '参考', description2: '参考', space:' ', key: '8', number: 62, img: 'https://picsum.photos/700' },
        { name: '514团建大家庭', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '参考', description2: '参考', space:' ', key: '9', number: 514, img: 'https://picsum.photos/700' },
        { name: '苏苏Bubble亲亲', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '参考', description2: '参考', space:' ', key: '10', number: 22, img: 'https://picsum.photos/700' },
        { name: 'SUN FLOWER', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '11', number: 621, img: 'https://picsum.photos/700' },
        { name: 'CARROT', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '12', number: 11, img: 'https://picsum.photos/700' },  
        { name: 'ALIZARIN', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '13', number: 534, img: 'https://picsum.photos/700' },
        { name: 'CLOUDS', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '14', number: '7k', img: 'https://picsum.photos/700' },
        { name: 'CONCRETE', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '15', number: 234, img: 'https://picsum.photos/700' },
        { name: 'ORANGE', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '16', number: '1k', img: 'https://picsum.photos/700' },
        { name: 'PUMPKIN', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '17', number: 232, img: 'https://picsum.photos/700' },
        { name: 'POMEGRANATE', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '18', number: 345, img: 'https://picsum.photos/700' },
        { name: 'SILVER', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '19', number: 44, img: 'https://picsum.photos/700' },
        { name: 'ASBESTOS', Intro: '这是一个友好的群,凑字数凑字数凑字', date: '2022年8月16日', code: 9184932943, location: 'blalala', description1: '篮球', description2: 'lol', space:' ', key: '20', number: 5, img: 'https://picsum.photos/700' },
      ]);
    
      return (
        <FlatGrid
        itemDimension={150}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
            <Card style = {styles.cardView}>
              <Card.Cover style = {styles.imageView} source={{ uri: item.img }} />
              <Card.Title style = {styles.titleView} title= {item.name}/>
              <Card.Content style = {{flexDirection: 'row'}}>
                <Paragraph style = {styles.tagItems}>{item.description1}</Paragraph>
                <Text>{item.space}</Text>
                <Paragraph style = {styles.tagItems}>{item.description2}</Paragraph>
              </Card.Content>
              <Card.Content style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                <Text style = {{opacity: 0.3, fontSize:9}}>
                  <Ionicons name ='earth' size={10} color = 'grey'/> {item.location}
                </Text> 
                <Text style = {{opacity: 0.3, fontSize:9}}>
                  <Ionicons name ='home' size={10} color = 'grey'/> {item.number}
                </Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        
        )}
        />
      );
}   

function GroupDetail({ route, navigation }) {
    const { item } = route.params;
    
    const onPressSeeAll = () => {
      console.warn("User wants to see all events");
      navigation.navigate("Home");
    }

    return (
        <View>
            <Card>
              <View style = {{flexDirection: 'row'}}>
                <Image style={styles.avatar} source={{uri: 'https://picsum.photos/700'}} />
                <View>
                  <Card.Title style = {styles.nameSection} title= {item.name}/>
                  <Text style = {styles.codeView}>{item.code}</Text>
                </View>
              </View>

              <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                <Text style = {{opacity: 0.4, fontSize:15, marginLeft:14, marginBottom:5,}}>
                    <Ionicons name ='time' size={17} color = 'grey'/>{item.date}
                </Text>
                <Text style = {{marginBottom:-25, marginRight:20, opacity: 0.5}}><Ionicons name ='qr-code-sharp' size={35} color = 'grey'/></Text>
              </View>

              <View>
                <Text style = {{opacity: 0.4, fontSize:15, marginLeft:14, marginBottom:17,}}>
                <Ionicons name ='document-text-outline' size={17} color = 'grey'/>{item.Intro}
                </Text>
              </View>

              <View style={{backgroundColor: '#F7F7F7',padding:6, marginBottom:10}}></View> 

              <Card.Content style = {{flexDirection: 'row',marginBottom:10, justifyContent:'space-between'}}>
                <View style = {{flexDirection: 'row', }}>
                  <Paragraph style = {styles.tagItems}>{item.description1}</Paragraph>
                  <Text>{item.space}</Text>
                  <Paragraph style = {styles.tagItems}>{item.description2}</Paragraph>
                </View>
                <Text style = {{opacity: 0.4, }}><Ionicons name ='create-outline' size={22} color = 'grey'/></Text>
              </Card.Content>

              <View style={{backgroundColor: '#F7F7F7',padding:6, marginBottom:10}}></View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%'}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold', marginLeft:10}}> Group Events </Text>
              </View>
              <ScrollView style={{flexDirection: "row", height: 230, width: '100%', paddingTop: 12.0, }} horizontal >
                    <Image 
                        style={{height: 200, width: 150, borderRadius: 15, marginLeft: 8}} 
                        source={{ uri: 'https://picsum.photos/700' }}
                    />
                    <Image 
                        style={{height: 200, width: 150, borderRadius: 15, marginLeft: 8}} 
                        source={{ uri: 'https://picsum.photos/700' }}
                    />
                    <Image 
                        style={{height: 200, width: 150, borderRadius: 15, marginLeft: 8}} 
                        source={{ uri: 'https://picsum.photos/700' }}
                    />
                    <Image 
                        style={{height: 200, width: 150, borderRadius: 15, marginLeft: 8}} 
                        source={{ uri: 'https://picsum.photos/700' }}
                    />
                    <Image 
                        style={{height: 200, width: 150, borderRadius: 15, marginLeft: 8}} 
                        source={{ uri: 'https://picsum.photos/700' }}
                    />
                    <Image 
                        style={{height: 200, width: 150, borderRadius: 15, marginLeft: 8}} 
                        source={{ uri: 'https://picsum.photos/700' }}
                    />
              </ScrollView>

              <View style={{backgroundColor: '#F7F7F7',padding:6, marginBottom:10}}></View> 

              <View style = {{flexDirection: 'row',marginBottom:10, justifyContent:'space-between'}}>
                <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold', marginLeft:14, marginTop:13,}}>Members</Text>
                <View style = {{flexDirection: 'row'}}>
                  <Image style={styles.avatarGroupMember} source={{uri: 'https://picsum.photos/700'}} />
                  <Image style={styles.avatarGroupMember} source={{uri: 'https://picsum.photos/700'}} />
                  <Image style={styles.avatarGroupMember} source={{uri: 'https://picsum.photos/700'}} />
                  <Text style = {{marginTop:13, marginLeft:20, marginRight:15, opacity:0.4,}}>
                    <Text style = {{fontSize: 15}}><Ionicons name ='person' size={17} color = 'grey'/>{item.number}</Text>
                    <Text> <Ionicons name ='ios-chevron-forward' size={17} color = 'grey'/> </Text>
                  </Text>
                </View>
              </View>
              <View style={{backgroundColor: '#F7F7F7',padding:6, marginBottom:10}}></View> 
              <View style = {styles.buttonView}>
                <CustomButton 
                  text="Join"
                  bgColor="#F0F0F0"
                  fgColor="#4765A9"
                />
                <CustomButton 
                  text="Subscribe"
                  bgColor="#F0F0F0"
                  fgColor="#4765A9"
                />
              </View>
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
      backgroundColor: '#FAFAFA',
    },
  
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 0,
      padding: 0,
      height: 220, // Modify this to change height of card
    },

    imageView: {
      borderRadius: 12,
    },

    cardView: {
      borderRadius: 15,
      shadowColor: "#000000",
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },

    titleView:{
      fontFamily: "Cochin",
      fontWeight: 'bold',
    },

    tagItems: {
      backgroundColor: '#F0EDED',
      color: '#949292',
      fontSize: 12,
      display: 'inline-block',
      paddingHorizontal: 7,
      paddingVertical: 1,
      borderRadius: 11,
      alignSelf: 'flex-start',
      overflow: 'hidden',
      flexDirection: 'row',
    },

    codeView: {
      margin: -20,
      marginLeft: 16,
      marginBottom:20,
    },

    avatar: {
      width: 50,
      height: 50,
      margin:10,
      marginRight: 0,
      borderRadius: 40,
    },

    avatarGroupMember: {
      width: 34,
      height: 34,
      margin:5,
      marginRight: 0,
      borderRadius: 40,
    },

    nameSection: {
      flexDirection: 'column',
      marginTop:-9,
      padding: 15,
    },

    buttonView: {
      marginLeft: 20, 
      marginRight:20, 
      padding:10,
      
    }


  
    // itemName: {
    //   fontSize: 16,
    //   color: '#fff',
    //   fontWeight: '1200',
    // },
  
    // itemCode: {
    //   fontWeight: '600',
    //   fontSize: 12,
    //   color: '#fff',
    // },
  });

  export default GroupScreen