import React from 'react';
import {FlatList} from 'react-native';
import ChatListItem from '../../Components/ChatListItem';
import chats from '../../database/chats.json';

export default function Chat() {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem data={item} />}
    />
  );
}
