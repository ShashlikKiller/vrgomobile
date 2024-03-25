import { StyleSheet } from 'react-native';
// import styles from './styles'; - вот так получать потом

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // Стили для экрана выбора патологии:
  patologyIntroduse: {
    color: 'white',
    fontSize: 19, //px
    fontFamily: 'Inter',
    fontWeight: '300',
    flexWrap: 'wrap' // break-word
  },
  patologyStartTyping: {
    color: '#B6FFFB',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '300',
    flexWrap: 'nowrap'
  },
  patologyChoise: {
    flex: 1,
    backgroundColor: '#404F4E', // Темный фон
    alignItems: 'center',
    justifyContent: 'center',
  },
  patologyChoiseText: {
    fontSize: 19,
    color: '#B6FFFB',
    //fontWeight: 'bold',
  }

});