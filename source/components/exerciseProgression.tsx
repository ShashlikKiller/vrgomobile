import { Text, View, StyleSheet } from "react-native";

interface Props {
    currentExercise: number;
    totalExercises: number;
  }

const ExerciseProgression: React.FC<Props> = ({ currentExercise, totalExercises }) => {
    return (
        <View style={styles.container}>
      <Text style={styles.fractionText}>{currentExercise} / {totalExercises}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    alignSelf: 'flex-end',
    flex: 1
  },
  fractionText: {
    color: '#B6FFFB',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
});

export default ExerciseProgression;