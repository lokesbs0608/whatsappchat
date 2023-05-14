import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg_container_u2: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  bg_container_u1: {
    backgroundColor: '#DCF8C5',
    alignSelf: 'flex-end',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  list: {
    padding: 5,
  },
  sub_title: {color: '#808080', alignSelf: 'flex-end'},
});

export default styles;
