import { View, StyleSheet, TouchableOpacity, Text, Modal} from 'react-native';
import { StartButtonEmpty, NextButtonEnablingDark, RunningExerciseButton} from './buttonsComponent';
import { useEffect, useMemo, useState } from 'react';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { SessionEvent } from '@scripts/models/Session';

export interface tooltipProp {
    FirstWidth: number;
    FirstHeight: number;
    SecondWidth: number;
    margin: number;



    StartButtonTitle: string;
    StartButtonDisabled: boolean;
    NextButtonAction: () => void;

    // Необязательные параметры
    StartButtonAction?: () => void;
    StopTimerAction?: () => void; 
    ContinueTimerAction?: () => void;
    NumbOfReps?: number; // Если не передавать - будет работать с таймером
    emitter?: EventEmitter; 
    // Необязательные параметры
}

export default function SessionTooltips(prop: tooltipProp) {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isTimerStartedAlready, setIsTimerStartedAlready] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState(false);

  useEffect(()=>{
    if(prop.emitter){
      prop.emitter.addListener(SessionEvent.timerOverNotify, ()=>{
        stopTimer();
      });
    }
  },[])
    const startOrContinueTimer =() =>
        {
            if (!isTimerStartedAlready)
            {
                prop.StartButtonAction!();
                setIsTimerStartedAlready(true);
            }
            else
            {
                prop.ContinueTimerAction!();
            }
            setIsActive(false);
        }

    const stopTimer = () =>
        {
            setIsActive(true)
            prop.StopTimerAction!();
            // И вот тут еще остановку времени.
        }


    return (
      <View style={{...styles.btnContainer, margin: prop.margin}}>

        {/* ВОТ ЭТО МОДАЛЬНОЕ ОКНО СДЕЛАТЬ КАК НА МАКЕТЕ */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}
        >
          <View>
            <Text> Модальное окно с инструкцией</Text>
            <Text> Надо сделать {prop.NumbOfReps} повторений.</Text>
            <TouchableOpacity style={{
              width: 50,
              height: 50,
              backgroundColor: '#FFFFFF'
            }}
            onPress={() => setModalVisible(false)}>
              <Text>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </Modal>


        {prop.NumbOfReps ? ( // Если упражнение на кол-во
          <>
            <View style={{width: prop.FirstWidth, height: prop.FirstHeight}}>
              <StartButtonEmpty title={`${prop.NumbOfReps} раз`} enabled={true} 
              action={()=> setModalVisible(true)}/>
            </View>
            <View style={{width: prop.SecondWidth}} >
               <NextButtonEnablingDark action={prop.NextButtonAction} title='Next' enabled={true} />
            </View>
          </>
        ) : (
          // Если переменной NumbOfReps нет, то проверяем isActive
          !isActive ? (
            <RunningExerciseButton action={stopTimer} enabled={true} title={prop.StartButtonTitle}/>
          ) : (
            <>
              <View style={{width: prop.FirstWidth, height: prop.FirstHeight}}>
                <StartButtonEmpty title={prop.StartButtonTitle} enabled={true} action={startOrContinueTimer}/>
              </View>
              <View style={{width: prop.SecondWidth}} >
                  <NextButtonEnablingDark action={prop.NextButtonAction} title='Next' enabled={isTimerStartedAlready} />
              </View>
            </>
          )
        )}
      </View>
    );
}


const styles = StyleSheet.create({
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'flex-end',
      backgroundColor: '#232323'
    }
  })