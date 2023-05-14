import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import ChatListItem from './src/Components/ChatListItem';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const chat = {
    id: '1',
    user: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlOjW52T1_LIJwaqDVQkoURm7xeacvkvn31w-Vu1DFtC78ZnlFFAxPtcGzYXl2y3hDpg&usqp=CAU',
      name: 'Tester',
    },
    last_message: {
      text: 'hey there',
      created_at: '9:30 PM',
    },
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ChatListItem data={chat} />
    </SafeAreaView>
  );
}

export default App;
