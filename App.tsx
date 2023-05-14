import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
// import ChatScreen from './src/Screens/Chats';
import Chat from './src/Screens/Chat';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ChatScreen /> */}
      <Chat />
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
