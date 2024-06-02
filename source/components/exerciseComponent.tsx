// <<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import ExerciseStep from '@components/exerciseStep';
import { disp_width } from '@scripts/utils/Const';
import { Exercise } from '@scripts/models/Exercise';
interface Prop {
   exercise: Exercise
}

function ExerciseComponent(prop: Prop){
  var exercise = prop.exercise;
    return (
        <ScrollView style={styles.body}>
          <View style={styles.content}>
            <Text style={styles.instructions}>{exercise.description}</Text>
            <Image style={styles.image} source={typeof exercise.image === 'string' ? { uri: exercise.image } : exercise.image}/>
            <View>
              {exercise.instruction?.map((step: string, stepNumb: number) => (
                <ExerciseStep stepNumb={stepNumb+1} step={step}></ExerciseStep>
              ))}
            </View>
          </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      body: {
        flex: 1
      },
      content: {
        margin: 16
      },
      instructions: {
        color: '#CFCFCF',
        fontSize: 18,
        fontFamily: 'Roboto Mono',
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
