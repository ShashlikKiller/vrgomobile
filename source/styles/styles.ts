import { StyleSheet } from 'react-native';
// import styles from './styles'; - вот так получать потом

import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  // Универсальные стили
    container: {
    flex: 1,

    backgroundColor: '#232323',
  },
  textDefault: {
    color: 'white',
    fontSize: 19, //px
    fontFamily: 'Inter',
    fontWeight: '300',
    flexWrap: 'wrap' // break-word
  },
  btn_1of3_wide: {
    width: screenWidth * 1 / 3.2,
    height: (screenWidth/screenHeight) * screenHeight / 7.4,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_3of3_wide: {
    width: screenWidth,
    height: (screenWidth/screenHeight) * screenHeight / 7.285,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_3of3_wide_in_modal_win: {
    width: screenWidth,
    height: (screenWidth/screenHeight) * screenHeight / 8.2,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_3of3_wide_in_main_menu: {
    width: screenWidth,
    height: (screenWidth/screenHeight) * screenHeight / 7.7,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_2of3_wide: {
    width: screenWidth * 2 / 3,
    height: (screenWidth/screenHeight) * screenHeight / 7.4,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_1of2_wide: {
    width: screenWidth / 2.2, 
    height: (screenWidth/screenHeight) * screenHeight / 7.4,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_1of6_wide: {
    width: screenWidth / 7.4,
    height: (screenWidth/screenHeight) * screenHeight / 8,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_next: { // Надо обернуть ее через <ImageBackground> в svgшку кнопки
    width: 1,
    height: 1,
    padding: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
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