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

        // session.enqueue(new Exercise("Упражнение 1", () => console.log("Выполняется упражнение 1")));
        // session.enqueue(new Exercise("Упражнение 2", () => console.log("Выполняется упражнение 2")));
        
        session.start();
        setSessionStarted(true);
    };

    return (
        <View style={styles1.body}>
          <View style={styles1.navbar}>
            <Button title="< Назад" color="#ddd"/>
            <ExerciseProgression currentExercise={1} totalExercises={3} ></ExerciseProgression>
          </View>
          <View style={styles1.content}>
            <Text style={styles1.instructions}>{_exercise.description}</Text>
            <Image style={styles1.image} source={{uri: _exercise.images }}/>  {/*</Image>'https://sun9-31.userapi.com/impg/Y-Ku1XquxYqhBCfDKIT2CnBxrbJtXWjkRn_pAQ/Oio67jyEWjk.jpg?size=2560x1920&quality=95&sign=ce8af5cd150fa7eae9679a4298840bf9&type=album'}} />*/}
            <View>
        {_exercise.instruction.map((step: string, stepNumb: number) => (
          <ExerciseStep stepNumb={stepNumb+1} step={step}> </ExerciseStep>
        ))}
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
        alignContent: 'center',
        verticalAlign: 'middle'
      },
      instructions: {
        marginBottom: 20,

        color: '#CFCFCF',
        fontSize: 18,
        fontFamily: 'Roboto Mono',
        fontWeight: '300'
      },
      steps: {
        //listStyleType: 'none',
        fontSize: 40,
        flex: 1
      },
      step: {
        position: 'relative',
        fontSize: 40,
        flex: 1
      },
      btn: {
        backgroundColor: '#ddd',
        color: 'black',
        padding: 20,
        textAlign: 'center',
        textDecorationLine: 'none',
        maxHeight: 50,
        //display: 'inline-block',
        margin: 4,
        flex: 1
        //cursor: 'pointer',
      },
      btnTimer: {
        backgroundColor: '#555',
        color: 'white',
        flex: 1
      },
      btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      image: {
        width: 'auto',
        alignItems: "flex-start",
        flex: 1,

        marginBottom: 30,
        marginTop: 30,
        // verticalAlign: "top"
      },
      text: {
        fontSize: 19,
        flex: 1
      },
    });    

export default ExerciseScreen;
