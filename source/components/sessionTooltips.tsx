import {View, StyleSheet, TouchableOpacity, Text, Modal} from 'react-native';
import { StartButtonEmpty, NextButton, RunningExerciseButton} from './buttonsComponent';
import { useMemo, useState } from 'react';

interface Prop {
    FirstWidth: number;
    FirstHeight: number;
    SecondWidth: number;

    // Сделать эти поля также необязательными:
    StartButtonAction: () => void;
    StopTimerAction: () => void; 
    ContinueTimerAction: () => void;

    NumbOfReps?: number; // Необязательный параметр.
    // Если не передавать - будет работать с таймером
    StartButtonTitle: string;
    StartButtonDisabled: boolean;
    NextButtonAction: () => void;
}

export default function SessionTooltips(prop: Prop) {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isTimerStartedAlready, setIsTimerStartedAlready] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState(false);

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

    // const startButtonProps = useMemo(() => ({ // Пропы для кнопки старта ОТДЕЛЬНО,
    //                                           // Чтобы он перерендерился только при изменении значения таймера
    //     title: prop.StartButtonTitle,
    //     disabled: prop.StartButtonDisabled
    // }), [prop.StartButtonTitle]);

    return (
      <View style={styles.btnContainer}>

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
              <NextButton action={prop.NextButtonAction}/> 
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
                <NextButton action={prop.NextButtonAction}/> 
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
      marginBottom: 10
    }
  })