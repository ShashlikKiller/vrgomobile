import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { StartButtonEmpty, NextButton, RunningExerciseButton} from './buttonsComponent';
import {useEffect, useMemo, useState } from 'react';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { SessionEvent } from '@scripts/models/Session';

interface Prop {
    FirstWidth: number;
    FirstHeight: number;
    SecondWidth: number;
    StartButtonTitle: string;
    StartButtonDisabled: boolean;
    emiter : EventEmitter;
    StartButtonAction: () => void;
    StopTimerAction: () => void;
    ContinueTimerAction: () => void;
    NextButtonAction: () => void;
}

export default function SessionTooltips(prop: Prop) {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isTimerStartedAlready, setIsTimerStartedAlready] = useState<boolean>(false);

    useEffect(()=>{
      prop.emiter.addListener(SessionEvent.refreshExerciseNotify, ()=>{
        setIsActive(true);
      });
    },[])
    const startOrContinueTimer =() =>
        {
            if (!isTimerStartedAlready)
            {
                prop.StartButtonAction();
                setIsTimerStartedAlready(true);
            }
            else
            {
                prop.ContinueTimerAction();
            }
            setIsActive(false);
        }

    const stopTimer = () =>
        {
            setIsActive(true)
            prop.StopTimerAction();
            // И вот тут еще остановку времени.
        }

    return (
        <View style={styles.btnContainer}>
      {!isActive ? (
        <RunningExerciseButton action={stopTimer} enabled={true} title={prop.StartButtonTitle}/>
        // <TouchableOpacity onPress={stopTimer} style={{
        //     backgroundColor: '#FFFF00',
        //     width: prop.FirstWidth, height: prop.FirstHeight, justifyContent: 'center', alignItems: 'center'}}>
        //   <Text>{prop.StartButtonTitle}</Text>
        // </TouchableOpacity>
      ) : (
        <>
          <View style={{width: prop.FirstWidth, height: prop.FirstHeight}}>
            <StartButtonEmpty title={prop.StartButtonTitle} enabled={true} action={startOrContinueTimer}/>
          </View>
          <View style={{width: prop.SecondWidth}} >
            <NextButton action={prop.NextButtonAction}/> 
          </View>
        </>
      )}
    </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'flex-end',
      marginBottom: 10
    }
  })