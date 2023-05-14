import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

interface Props {
  data: any;
}

export default function ChatListItem({data}: Props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: data?.user?.image}} style={styles.image} />
      <View style={styles.content_container}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {data?.user?.name}
          </Text>
          <Text style={styles.sub_title}>
            {dayjs().to(dayjs(data?.lastMessage?.createdAt))}
          </Text>
        </View>
        <Text style={styles.sub_title}>{data?.lastMessage.text}</Text>
      </View>
    </View>
  );
}
