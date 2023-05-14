import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

interface Props {
  data: any;
}

export default function ChatListItem({data}: Props) {
  console.log(data);
  return (
    <View style={styles.container}>
      <Image source={{uri: data?.user?.image}} style={styles.image} />
      <View style={styles.content_container}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {data?.user?.name}
          </Text>
          <Text style={styles.sub_title}>
            {dayjs
              .duration(dayjs().diff(dayjs(data?.lastMessage?.createdAt)))
              .humanize()}
          </Text>
        </View>
        <Text style={styles.sub_title}>{data?.lastMessage.text}</Text>
      </View>
    </View>
  );
}
