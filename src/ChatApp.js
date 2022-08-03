import React, {useState} from 'react';
import Chat from './Chat';
import Users from './Users';

const defaultUsers = [
  {
    id: 1, 
    name: 'Alex', 
    avatar: 'https://placeimg.com/140/140/any',
    messageTime: '4 mins ago',
    messageText:'Hey there, this is my test for a post of my social app in React Native.',
  },

  {
    id: 2, 
    name: 'Sara', 
    avatar: 'https://placeimg.com/140/140/any',
    messageTime: '4 mins ago',
    messageText:'Hey there, this is my test for a post of my social app in React Native.',
  },

  {
    id: 3, 
    name: 'Michael', 
    avatar: 'https://placeimg.com/140/140/any',
    messageTime: '4 mins ago',
    messageText:'Hey there, this is my test for a post of my social app in React Native.',
  },

];
export default function ChatApp() {
  const [currentPage, setCurrentPage] = useState('users');
  // const [username, setUsername] = useState(null);
  const [users, setUsers] = useState(defaultUsers);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const onClickUser = (user) => {
    setCurrentPage('chat');
    setSelectedUser(user);
  };
  const onAddUser = () => {};

  const onBack = () => {
    setCurrentPage('users');
  };

  switch (currentPage) {
    case 'users':
      return (
        <Users
          users={users}
          onClickUser={onClickUser}
          userToAdd={userToAdd}
          setUserToAdd={setUserToAdd}
          onAddUser={onAddUser}
        />
      );
    case 'chat':
      return <Chat selectedUser={selectedUser} onBack={onBack} />;
    default:
      return null;
  }
}
