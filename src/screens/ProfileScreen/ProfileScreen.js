import { View,Image,Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import Backg from '../../../assets/bgExOne.png';
import profilePic from '../../../assets/exampleOne.png';
import { AntDesign } from '@expo/vector-icons'; 


const ProfileScreen = () => {
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onPressSeeAll = () => {
        console.warn("User wants to see all events");
        navigation.navigate("Home");
    }
    const editProfile = () => {
        console.warn("User wants to edit profile.");
    }


    return (
        <View styles={styles.containerImage}>
            <Image 
                style={styles.bgImage}
                source={Backg}
            />
            <AntDesign
                style={{color:'black', position:'absolute',top:15, right:20}}
                name="ellipsis1" 
                size= {25}
                onPress={editProfile}
            />
            <View style={styles.bottomContainer}>
                <Image 
                    style={styles.profile}
                    source={profilePic}
                />
                <Text style={styles.name}> UwU Charles </Text>
                <Text style={{color: 'grey', bottom: '7%'}}>London, United Kingdom{"\n"}Imperial College London</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%'}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}> Events </Text>
                    <CustomButton 
                        text="See All" 
                        type='MINOR' 
                        onPress={onPressSeeAll}
                    />
                </View>
                <ScrollView style={{flexDirection: "row", height: 200, width: '100%', paddingLeft: 50.0, paddingTop: 12.0}} horizontal >
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
    },
    bottomContainer: {
        marginTop:"52%",
        height:"90%", 
        width: 400, 
        backgroundColor: 'white', 
        borderTopStartRadius: 50, 
        borderTopEndRadius: 50,
        alignItems: 'center',
    },
    profile:{
        height: 120,
        width: 120,
        borderRadius: 25,
        bottom: '10%'
    },
    name:{
        fontSize: 36,
        fontWeight: 'bold',
        bottom: '8%'
    }
})

export default ProfileScreen