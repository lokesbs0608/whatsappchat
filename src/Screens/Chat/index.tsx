import React from 'react';
import {
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BG from '../../assets/BG.png';
import styles from './styles';
import messages from '../../database/messages.json';
import Message from '../../Components/Message';
import InputBox from '../../Components/InputBox';

export default function Chat() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bg_container}>
      <ImageBackground style={styles.bg_container} source={BG}>
        <FlatList
          data={messages}
          inverted
          style={styles.list}
          renderItem={({item}) => <Message message={item} />}
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
