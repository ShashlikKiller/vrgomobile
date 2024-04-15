import React, { useState } from 'react';
import { Image, Dimensions, View, StyleSheet, Text, Button, ScrollView } from 'react-native';
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

const { width: disp_width, height: disp_height } = Dimensions.get('window');
// Получаем разрешение экрана

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
        <ScrollView style={styles1.body}>
          <View style={styles1.content}>
            <Text style={styles1.instructions}>{_exercise.description}</Text>
            <View style={styles1.imageContainer}>
              <Image style={styles1.image} resizeMode='contain' source={{uri: _exercise.images }}/>
            </View>
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
        </ScrollView>
      );
    };
    
    const styles1 = StyleSheet.create({
      body: {
        //backgroundColor: '#232323',
        //color: 'white',
        //fontFamily: 'Arial',
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
        //fontFamily: 'Roboto Mono',
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
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: '100%'

      },
      imageContainer: {
        flex: 1,
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 30,
        width: disp_width - 40,
        aspectRatio: 1
      },
      text: {
        fontSize: 19,
        flex: 1
      },
    });    

export default ExerciseScreen;
