import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Exercise } from './Model/Exercise';
import ExerciseScreen from './View/Screens/Exercise-screen';
import choosePat from './View/choosePat';
import Navigate from './View/navigate';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Inter: require('./assets/fonts/Inter-Regular.ttf'),
      'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
      'RobotoMono': require('./assets/fonts/RobotoMono-Regular.ttf'),
      'RobotoMono-Bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    loadFonts();
    return null;
  }

  // нужно будет брать флаг из файла, выбраны ли части тела и патологии или нет 
  // например, это первый вход и ещё ничто НЕ выбрано, поэтому false
  if (!false) { 
    return Navigate('choosePat')
  } else {
    return Navigate('mainScreen')
  }

  // return (
  //   <View style={styles.container}>
  //           <ExerciseScreen _exercise={_exercise}></ExerciseScreen>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}
