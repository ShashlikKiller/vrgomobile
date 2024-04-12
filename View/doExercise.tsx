import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import ExerciseScreen from './Screens/Exercise-screen';
import { Exercise } from '../Model/Exercise';
import { ClearStackAndNavigate } from './navigate';
import styles from './Screens/styles/styles';


export default function doExercise({navigation}: {navigation: any}){ //}, exercise: Exercise) {
  const loadScene = () => {
    navigation.navigate('initialScreen')
    navigation.popToTop()
  }
  const clearStackAndNavigate = () => {
    ClearStackAndNavigate({navigation, path: 'mainScreen'});
  }
  let exercise: Exercise = new Exercise(1, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["b", "c", "d", 'f', 'dddd' , 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd'], "https://sun9-31.userapi.com/impg/Y-Ku1XquxYqhBCfDKIT2CnBxrbJtXWjkRn_pAQ/Oio67jyEWjk.jpg?size=2560x1920&quality=95&sign=ce8af5cd150fa7eae9679a4298840bf9&type=album")
    return( 
        <View style={styles.container}>
          <Button title='Back' onPress={clearStackAndNavigate}></Button>
          <ExerciseScreen _exercise={exercise}/>
        </View>
        
    );
}