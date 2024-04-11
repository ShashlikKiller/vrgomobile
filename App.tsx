import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Exercise } from './Model/Exercise';
import ExerciseScreen from './View/Screens/Exercise-screen';
import choosePat from './View/choosePat';
import Navigate from './View/navigate';


export default function App() {

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
