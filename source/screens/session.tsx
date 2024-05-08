import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { BackButton, BackButtonLittle } from '@components/buttonsComponent';
import styles from '@styles/styles';
import { View } from 'react-native';
import { Exercise } from '@models/Exercise';
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
          <ExerciseComponent _navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323'
  }
})