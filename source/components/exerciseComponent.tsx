import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import ExerciseStep from '@components/exerciseStep';
import { disp_width } from '@scripts/utils/Const';
import { Exercise } from '@scripts/models/Exercise';


function ExerciseComponent(exercise: any){
  const [exInstrution, setExInstrution] = useState(exercise.instruction);
  const [exImages, setExImages] = useState(exercise.image);
  const [exDescription, setExDescription] = useState(exercise.description);
  
  const refreshExerciseHandler = (exercise: Exercise) => {
    setExInstrution(exercise.instruction);
    setExImages(exercise.image);
    setExDescription(exercise.description);
  };

  useEffect(()=>{refreshExerciseHandler(exercise);
    console.debug("ExerciseComponent", exercise);

  },[]);
    return (
      <>
        <ScrollView style={styles.body}>
          <View style={styles.content}>
            
            <Text style={styles.instructions}>{exDescription}</Text>
            
            <Image style={styles.image} source={{uri: exImages }}/>
            
            <View>
              {exInstrution?.map((step: string, stepNumb: number) => (
                <ExerciseStep stepNumb={stepNumb+1} step={step}></ExerciseStep>
              ))}
            </View>
          </View>
        </ScrollView>
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
