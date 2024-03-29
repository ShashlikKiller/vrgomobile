import React, { useState } from 'react';
import { Image, TouchableOpacity, Platform, View, StyleSheet, Text, Button } from 'react-native';
import styles from './styles/styles';
import ExerciseStep from '../exerciseStep';
import ExerciseProgression from '../exerciseProgression';
import { Session } from '../../Model/Session';

interface Exercise {
  images: string;
  description: string;
  instruction: string[];
}

interface Props {
  _exercise: Exercise;
}

const ExerciseScreen: React.FC<Props> = ({ _exercise }) => {
    const [sessionStarted, setSessionStarted] = useState(false);

    const handleStartSession = () => {
        const session = new Session();
        // Пример:
        // session.enqueue(new Exercise("Упражнение 1", () => console.log("Выполняется упражнение 1")));
        // session.enqueue(new Exercise("Упражнение 2", () => console.log("Выполняется упражнение 2")));
        
        session.start();
        setSessionStarted(true);
    };

    return (
        <View style={styles1.body}>
          <View style={styles1.navbar}>
            <Button title="< Назад" color="#ddd" />
            <ExerciseProgression currentExercise={1} totalExercises={3} ></ExerciseProgression>
          </View>
          <View style={styles1.content}>
            <Text style={styles1.instructions}>{_exercise.description}</Text>
            <Image style={styles1.image} source={{uri: 'https://sun9-31.userapi.com/impg/Y-Ku1XquxYqhBCfDKIT2CnBxrbJtXWjkRn_pAQ/Oio67jyEWjk.jpg?size=2560x1920&quality=95&sign=ce8af5cd150fa7eae9679a4298840bf9&type=album'}} />
            <View>
              <ExerciseStep stepNumb={1} step={_exercise.instruction[0]}>
              </ExerciseStep>
              <ExerciseStep stepNumb={2} step={_exercise.instruction[1]}>
              </ExerciseStep>
              <ExerciseStep stepNumb={3} step={_exercise.instruction[2]}>
              </ExerciseStep>
            </View>
            <View style={styles1.btnContainer}>
              <Button title="Старт таймера" color="#555" onPress={handleStartSession} disabled={sessionStarted} />
              <Button title="Далее >" color="#ddd" />
            </View>
          </View>
        </View>
      );
    };
    
    const styles1 = StyleSheet.create({
      body: {
        backgroundColor: '#232323',
        color: 'white',
        fontFamily: 'Arial',
        height: 'auto',
        flex: 1,

      },
      navbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
      },
      content: {
        margin: 20,
        flexGrow: 1,
        alignContent:
