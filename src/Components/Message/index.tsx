import React from 'react';
import {View, Text} from 'react-native';
import dayjs from 'dayjs';
import styles from './styles';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

interface Props {
  message: any;
}
export default function Message({message}: Props) {
  const isMyMessage = () => {
    return message?.user.id === 'u1';
  };
  return (
    <View
      style={isMyMessage() ? styles.bg_container_u1 : styles.bg_container_u2}>
      <Text>{message?.text}</Text>
      <Text style={styles.sub_title}>
        {dayjs().to(dayjs(message?.createdAt))}
      </Text>
    </View>
  );
}
