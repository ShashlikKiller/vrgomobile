import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
// import styles from './styles'; - вот так получать потом

export default StyleSheet.create({
  // Универсальные стили
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  textDefault: {
    color: 'white',
    fontSize: 19, //px
    fontFamily: 'Inter',
    fontWeight: '300',
    flexWrap: 'wrap' // break-word
  },
  btn_next: { // Надо обернуть ее через <ImageBackground> в svgшку кнопки
    width: 328,
    height: 46,
    padding: 8
  },
  textTitle: {
    color: '#232323',
    fontSize: 26,
    fontFamily: 'Roboto Mono',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
  textDontShowAgain: {
    color: '#B6FFFB',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '400',
    flexWrap: 'wrap'
  },
  textDontShowAgainChecked: { // использовать вместе с обычным
    color: '#FFB800',
    fontWeight: '300',
  },
  textModalWindow: { // Применять вместе с textDefault
    color: '#232323',
  },

  // Стили для экрана выбора патологии:
  textPatology: {
    color: '#B6FFFB',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '300',
    flexWrap: 'nowrap'
  },
  patologyChoise: {
    flex: 1,
    backgroundColor: '#404F4E', // Темный фон
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  patologySideText: {
    color: 'rgba(255; 255; 255; 0.70)',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '400',
    flexWrap: 'wrap'
  },
  patologySideTextChecked: { // Использовать вместе с обычным стилем
    color: '#FFB800'
  },

 // Стили для экрана упражнений
 textExerciseProgression: {
    color: '#BDBDBD',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '200',
    flexWrap: 'wrap'
 },
 textExerciseDescription: {
    color: '#CFCFCF',
    fontSize: 18,
    fontFamily: 'Roboto Mono',
    fontWeight: '300',
    flexWrap: 'wrap'
 },
 textExerciseStepDescription: {
    color: 'rgba(255; 255; 255; 0.70)',
    fontSize: 18,
    fontFamily: 'Roboto Mono',
    fontWeight: '300',
    flexWrap: 'wrap'
},
textExerciseStepNumber: {
    color: 'rgba(255; 255; 255; 0.70)',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '400',
    flexWrap: 'wrap',
},
textExerciseCurrentStepNumber: { // Использовать вместе с textExerciseStepNumber
    color: '#B6FFFB'
},
});