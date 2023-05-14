import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    alignSelf: 'center',
  },
  send_btn: {
    padding: 5,
  },
  plus_btn: {
    padding: 5,
  },
  input_container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 30,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  key_board: {
    flex: 1,
  },
});
export default styles;
