import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { BackButtonLittle } from '@components/buttonsComponent';
import ExerciseComponent from '@components/exerciseComponent';
// import { ClearStackAndNavigate } from '@navigations/navigate';
import TooltipWin from '@components/Modal/tooltipWin';
import { useState } from 'react';
import { ClearStackAndNavigate, NavigationContext, Screens } from "@navigations/navigate";

export default function doExercise({navigation}: {navigation: any}){
  const loadScene = () => {
    navigation.navigate('initialScreen')
    navigation.popToTop()
  }
  const clearStackAndNavigate = () => {
    ClearStackAndNavigate(navigation, 'mainScreen');
  }

  const text_1: string = "Желательно выполнять под присмотром или с тростью \n После ознакомления с инструкцией нажмите 'старт'"
  const [modalWindow, setModalWindow] = useState(true);
  const toggleModal = () => {
    setModalWindow(!modalWindow);
  }

    return( 
        <View style={styles.container}>
          <TooltipWin modalWindow = {modalWindow} textHead = 'Инструкция' textBody = {text_1} toggleModal = {toggleModal}/>
          <BackButtonLittle action={clearStackAndNavigate}></BackButtonLittle>
          <ExerciseComponent navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323'
  }
})