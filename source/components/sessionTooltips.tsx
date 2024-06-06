import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { StartButtonEmpty, NextButtonEnablingDark } from './buttonsComponent';
import { useMemo, useState } from 'react';

interface Prop {
    FirstWidth: number;
    FirstHeight: number;
    SecondWidth: number;
    StartButtonAction: () => void;
    StopTimerAction: () => void;
    ContinueTimerAction: () => void;
    StartButtonTitle: string;
    StartButtonDisabled: boolean;
    NextButtonAction: () => void;
}

export default function SessionTooltips(prop: Prop) {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isTimerStartedAlready, setIsTimerStartedAlready] = useState<boolean>(false);

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
      {!isActive ? (
        <TouchableOpacity onPress={stopTimer} style={{
            backgroundColor: '#FFFF00',
            width: prop.FirstWidth, height: prop.FirstHeight, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{prop.StartButtonTitle}</Text>
        </TouchableOpacity>
      ) : (
        <>
          <View style={{width: prop.FirstWidth, height: prop.FirstHeight}}>
            <StartButtonEmpty title={prop.StartButtonTitle} enabled={true} action={startOrContinueTimer}/>
          </View>
          <View style={{width: prop.SecondWidth}} >
              <NextButtonEnablingDark action={prop.NextButtonAction} title='Next' enabled={isTimerStartedAlready} />
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