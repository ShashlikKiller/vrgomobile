import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { StartButtonEmpty, NextButton } from './buttonsComponent';
import { useMemo, useState } from 'react';

interface Prop {
    FirstWidth: number;
    FirstHeight: number;
    SecondWidth: number;
    StartButtonAction: () => void;
    StartButtonTitle: string;
    StartButtonDisabled: boolean;
    NextButtonAction: () => void;
}

export default function SessionTooltips(prop: Prop) {
    const [isActive, setIsActive] = useState<boolean>(true);

    const startTimer =() =>
        {
            prop.StartButtonAction();
            setIsActive(false);
            console.log('таймер запущен / возобновлен.');
            // Вот тут старт времени и его возобновление.
        }

    const stopTimer = () =>
        {
            setIsActive(true)
            console.log('таймер остановлен.');
            // И вот тут еще остановку времени.
        }

    const startButtonProps = useMemo(() => ({ // Пропы для кнопки старта ОТДЕЛЬНО,
                                              // Чтобы он перерендерился только при изменении значения таймера
        action: startTimer,
        title: prop.StartButtonTitle,
        disabled: prop.StartButtonDisabled
    }), [prop.StartButtonTitle]);

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
            <StartButtonEmpty {...startButtonProps}/>
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