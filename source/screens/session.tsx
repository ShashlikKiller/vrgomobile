import * as React from 'react';
import styles from '@styles/styles';
import { View } from 'react-native';
import { Exercise } from '@models/Exercise';
import { BackButton } from '@components/buttonsComponent';
import ExerciseComponent from '@components/exerciseComponent';
import { ClearStackAndNavigate } from '@navigations/navigate';


export default function doExercise({navigation}: {navigation: any}){
  const loadScene = () => {
    navigation.navigate('initialScreen')
    navigation.popToTop()
  }
  const clearStackAndNavigate = () => {
    ClearStackAndNavigate({navigation, path: 'mainScreen'});
  }
  let exercise: Exercise = new Exercise(1, 5, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["b", "c", "d", 'f', 'dddd' , 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd', 'dddd'], "https://sun9-31.userapi.com/impg/Y-Ku1XquxYqhBCfDKIT2CnBxrbJtXWjkRn_pAQ/Oio67jyEWjk.jpg?size=2560x1920&quality=95&sign=ce8af5cd150fa7eae9679a4298840bf9&type=album")
    return( 
        <View style={styles.container}>
          <BackButton action={clearStackAndNavigate}></BackButton>
          <ExerciseComponent _navigation={navigation}/>
        </View>
        
    );
}