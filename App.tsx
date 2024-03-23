import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Exercise } from './Model/Exercise';
import ExerciseScreen from './View/Screens/Exercise-screen';




export default function App() {

  // test object
  const Instructions = [
    "1 шаг инструкции",
    "2 шаг инструкции",
    "3 шаг инструкции",
    "4 шаг инструкции",
  ];

let _exercise: Exercise = new Exercise(1, "Описание упражнения", Instructions, 
"https://sun9-68.userapi.com/impg/l4BLPLtsXUEVok-wHlEquqo7LiYZxENkQc7ldg/t5zGQjoSO9Y.jpg?size=809x1080&quality=95&sign=7bd712449dd6c9f423248c4fbf890483&type=album");
  // test object


  return (
    <View style={styles.container}>
            <ExerciseScreen _exercise={_exercise}></ExerciseScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
