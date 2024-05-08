import React, { useEffect, useState } from 'react';
import { Image, Dimensions, View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import ExerciseStep from '@components/exerciseStep';
import { Session } from '@models/Session';
import { Exercise } from '@models/Exercise';
import { NextButton, StartButton, StartButtonEmpty } from './buttonsComponent';

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

      session.enqueue(new Exercise(1, 5, "Поставьте две бутылки на расстоянии 1,5 м,",["Пройдите над бутылками гемиплегичной ногой.", "Развернитесь и начните снова"], "https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album"))
      session.enqueue(new Exercise(1, 5, "Передвиньте бутылки на 2 метра вперед,",["Сделайте шаг назад, затем влево и вправо", "Посмотрите в окно и послушайте это весеннее чириканье птичек,", "Насладитесь этим прекрасным днем."], "https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album"))

      session.nextExercise()
      setSession(session)

      setRunTime(0)
    };

    useEffect(() => {
      handleStartSession();
    }, []);

    return (
      <>
        <ScrollView style={styles.body}>
          <View style={styles.content}>
            <Text style={styles.instructions}>{exDescription}</Text>
              <Image style={styles.image} source={{uri: exImages }}/>
            <View>
        {exInstrution?.map((step: string, stepNumb: number) => (
          <ExerciseStep stepNumb={stepNumb+1} step={step}> </ExerciseStep>
        ))}
          </View>
          </View>
        </ScrollView>
        <View style={styles.btnContainer}>
          <View style={{width: disp_width * 1 / 2 * 0.851, height: disp_height / 16}}>
            <StartButtonEmpty action={session.executeExercise} title={Math.ceil((runTime+300)/1000).toString()} disabled={sessionStarted}/>
          </View>
          <View style={{width: disp_width * 2 / 3 * 0.668}} >
            <NextButton action={session.nextExercise}/> 
          </View>
        </View>
        </>
      );
    };
    
    const styles = StyleSheet.create({
      body: {
        flex: 1,
      },
      content: {
        margin: 16
      },
      instructions: {
        color: '#CFCFCF',
        fontSize: 18,
        fontFamily: 'RobotoMono',
        fontWeight: '300'
      },
      btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-end',
        marginBottom: 10
      },
      image: {
        aspectRatio: 1.5,
        width: disp_width - 32,
        marginTop: 20,
        marginBottom: 20
      },
      text: {
        fontSize: 19,
        flex: 1
      },
    });    

export default ExerciseComponent;
