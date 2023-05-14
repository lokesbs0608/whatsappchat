import React from 'react';
import {ImageBackground, FlatList} from 'react-native';
import BG from '../../assets/BG.png';
import styles from './styles';
import messages from '../../database/messages.json';
import Message from '../../Components/Message';

export default function Chat() {
  return (
    <ImageBackground style={styles.bg_container} source={BG}>
      <FlatList
        data={messages}
        inverted
        style={styles.list}
        renderItem={({item}) => <Message message={item} />}
      />
    </ImageBackground>
  );
}
