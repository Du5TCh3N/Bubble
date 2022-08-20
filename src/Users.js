import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import {
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/UserStyles';

export default function Users({
  users,
  onClickUser,
}) {
  const renderUser = ({item}) => {
    return (
      <Pressable onPress={() => onClickUser(item)} style={styles.row}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <TextSection>
          <UserInfoText>
            <UserName>{item.name}</UserName>
            <PostTime>{item.messageTime}</PostTime>
          </UserInfoText>
          <MessageText>{item.messageText}</MessageText>
        </TextSection>
      </Pressable>
    );
  };
  return (
    <>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
    paddingleft: '20px',
    paddingright: '20px',
  },
  input: {
    backgroundColor: '#cacaca',
    flex: 1,
    marginRight: 10,
    padding: 10,
  },

  TextSection: {
    flexDirection: 'column',
    justifycontent: 'center',
    padding: 15,
    paddingleft: 0,
    marginleft: '10px',
    width: 300,
    borderbottomwidth: '1px',
    borderbottomcolor: '#cccccc',
    fontFamily: "Cochin",
    fontWeight: 'bold',
  },

  UserInfoText: {
    flexDirection: 'row',
    justifycontent: 'space-between',
    marginBottom: '5px',
  }

});
