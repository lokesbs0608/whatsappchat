import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/Plus';
import SendIcon from '../../assets/Send';

export default function InputBox() {
  const [message, setMessage] = useState('');
  const onSend = () => {
    console.log('sending message', message);
  };
  return (
    <View style={styles.container}>
      <PlusIcon />
      <TextInput
        style={styles.input_container}
        placeholder="type your message here..."
        onChangeText={e => setMessage(e)}
      />
      <TouchableOpacity onPress={onSend}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
}
