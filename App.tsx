import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import ChatScreen from './src/Screens/Chats';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ChatScreen />
    </SafeAreaView>
  );
}

export default App;
