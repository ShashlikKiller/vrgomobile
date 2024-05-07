import * as React from 'react';
import styles from '@styles/styles';
import { View } from 'react-native';
import { Exercise } from '@models/Exercise';
import { BackButton, BackButtonLittle } from '@components/buttonsComponent';
import ExerciseComponent from '@components/exerciseComponent';
import { ClearStackAndNavigate } from '@navigations/navigate';


export default function doExercise({navigation}: {navigation: any}){
  const loadScene = () => {
    navigation.navigate('initialScreen')
    navigation.popToTop()
  }
  const clearStackAndNavigate = () => {
    ClearStackAndNavigate(navigation, 'mainScreen');
  }
    return( 
        <View style={styles.container}>
          <BackButtonLittle action={clearStackAndNavigate}></BackButtonLittle>
          <ExerciseComponent navigation={navigation} />
        </View>

    );
}
