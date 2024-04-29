import React, { useEffect, useState } from 'react';
import { Image, Dimensions, View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import ExerciseStep from '@components/exerciseStep';
import { Session } from '@models/Session';
import { Exercise } from '@models/Exercise';
import { NextButton } from './buttonsComponent';

// interface Exercise {
//   images: string;
//   description: string;
//   instruction: string[];
// }

interface Props {
  navigation: any
  // _exercise: Exercise;
}

const { width: disp_width, height: disp_height } = Dimensions.get('window');
// Получаем разрешение экрана

const ExerciseComponent: React.FC<Props> = ({ navigation }) => { 
    const [session, setSession] = useState(new Session());
    const [currExercise, setCurrExercise] = useState(new Exercise(0,0,"",[""],""));
    const [sessionStarted, setSessionStarted] = useState(false);
    const [exInstrution, setExInstrution] = useState(currExercise.instruction);
    const [exImages, setExImages] = useState(currExercise.images);
    const [exDescription, setExDescription] = useState(currExercise.description);
    const [runTime, setRunTime] = useState(session.runTime);

    const refreshExerciseHandler = (exercise: Exercise) => {
      setExInstrution(exercise.instruction);
      setExImages(exercise.images);
      setExDescription(exercise.description);
    };

    const refreshRunTimeHandler = (runTime: number) => {
      setRunTime(runTime);
    };

    const handleStartSession = () => {
      session.navigation = navigation
      const emitter = session.emitter;
      emitter.addListener("refreshExercise", refreshExerciseHandler);
      emitter.addListener("refreshRunTime", refreshRunTimeHandler);

      session.enqueue(new Exercise(1, 5, "ddddd",["sdsdsd", "ssss"], "https://sun9-31.userapi.com/impg/Y-Ku1XquxYqhBCfDKIT2CnBxrbJtXWjkRn_pAQ/Oio67jyEWjk.jpg?size=2560x1920&quality=95&sign=ce8af5cd150fa7eae9679a4298840bf9&type=album"))
      session.enqueue(new Exercise(1, 5, "hehe",["11!!111!!", "ccc"], "https://sun9-31.userapi.com/impg/Y-Ku1XquxYqhBCfDKIT2CnBxrbJtXWjkRn_pAQ/Oio67jyEWjk.jpg?size=2560x1920&quality=95&sign=ce8af5cd150fa7eae9679a4298840bf9&type=album"))

      session.nextExercise()
      setSession(session)

      setRunTime(0)
    };

    useEffect(() => {
      handleStartSession();
    }, []);

    return (
        <ScrollView style={styles1.body}>
          <View style={styles1.content}>
            <Text style={styles1.instructions}>{exDescription}</Text>
            <View style={styles1.imageContainer}>
              <Image style={styles1.image} resizeMode='contain' source={{uri: exImages }}/>
            </View>
            <View>
        {exInstrution?.map((step: string, stepNumb: number) => (
          <ExerciseStep stepNumb={stepNumb+1} step={step}> </ExerciseStep>
        ))}
            </View>
            <View style={styles1.btnContainer}> 
              <Button title={Math.ceil((runTime+300)/1000).toString()} color="#555" onPress={session.executeExercise} disabled={sessionStarted} />
              <NextButton action={session.nextExercise} /> 
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
        fontFamily: 'RobotoMono',
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

export default ExerciseComponent;
