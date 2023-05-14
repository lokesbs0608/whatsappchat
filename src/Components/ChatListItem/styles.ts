import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  content_container: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  name: {flex: 1, fontWeight: 'bold'},
  sub_title: {color: '#808080'},
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
