import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BackButtonLittle, NextButton, StartButtonEmpty } from '@components/buttonsComponent';
import ExerciseComponent from '@components/exerciseComponent';
import { ClearStackAndNavigate, Screens } from '@navigations/navigate';
import { disp_height, disp_width } from '@scripts/utils/Const';
import { useEffect, useState } from 'react';
import { Session, SessionEvent } from '@scripts/models/Session';
import { Exercise } from '@scripts/models/Exercise';
import TooltipWin from '@components/Modal/tooltipWin';
import SessionTooltips from '@components/sessionTooltips';
import ExerciseProgression from '@components/exerciseProgression';

var sessionDefault = new Session();
export default function SessionScreen({ navigation }: { navigation: any }) {
  var [session, setSession] = useState<Session>(sessionDefault);
  var [sessionStarted, setSessionStarted] = useState(false);
  var [runTime, setRunTime] = useState(0);
  var [exercise, setExercise] = useState<Exercise>(new Exercise(1,5,'Поставьте две бутылки на расстоянии 1,5 м,',['Пройдите над бутылками гемиплегичной ногой.', 'Развернитесь и начните снова'],'https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album'));
  var [completedExercises, setCompletedExercises] = useState(0);
  var [totalExercises, setTotalExercises] = useState(0);

  useEffect(() => {
    const emitter = session!.emitter;
    emitter.addListener(SessionEvent.refreshExerciseNotify, refreshExerciseHandler);
    emitter.addListener(SessionEvent.refreshRunTimeNotify, refreshRunTimeHandler);
    emitter.addListener(SessionEvent.closeSessionNotify, clearStackAndNavigate);

    session!.enqueue(new Exercise(1,5,'Поставьте две бутылки на расстоянии 1,5 м,',['Пройдите над бутылками гемиплегичной ногой.', 'Развернитесь и начните снова'],'https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album'));
    session!.enqueue(new Exercise(2,5,'Передвиньте бутылки на 2 метра вперед,',['Сделайте шаг назад, затем влево и вправо','Посмотрите в окно и послушайте это весеннее чириканье птичек,','Насладитесь этим прекрасным днем.'],'https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album'));
    setTotalExercises(session!.getQueueLength());
    setCompletedExercises(0);

    let ex = session!.init();
    setExercise(ex);
  }, []);

  const refreshRunTimeHandler = (runTime: number) => {
    setRunTime(runTime);
  };

  const clearStackAndNavigate = () => {
    ClearStackAndNavigate(navigation, Screens.MainScreen);
  };

  const text_1: string = "Желательно выполнять под присмотром или с тростью \n После ознакомления с инструкцией нажмите 'старт'";
  const [modalWindow, setModalWindow] = useState(true);
  const toggleModal = () => {
    setModalWindow(!modalWindow);
  };

  const refreshExerciseHandler = () => {
    console.debug("refreshExerciseHandler", session.currentExercise);
    setExercise(session!.currentExercise)
    setCompletedExercises(completedExercises + 1);
  }

  return (
    <>
      <View style={styles.container}>
        <TooltipWin
          modalWindow={modalWindow}
          textHead='Инструкция'
          textBody={text_1}
          toggleModal={toggleModal}
        />
        <View />

        <View style={styles.top_navbar}>
          <BackButtonLittle action={clearStackAndNavigate} />
          <ExerciseProgression currentExercise={completedExercises + 1} totalExercises={totalExercises} />
        </View>
        <ExerciseComponent exercise={exercise} />
        <SessionTooltips
          FirstWidth={disp_width * 1 / 2 * 0.851}
          FirstHeight={disp_height / 16}
          StartButtonAction={() => session!.start()}
          //NumbOfReps={15} // Необязательный параметр
          StopTimerAction={() => session!.stopTimer()} // остановка таймера
          ContinueTimerAction={() => session!.continueTimer()} // возобновление
          StartButtonTitle={Math.ceil((runTime + 300) / 1000).toString()}
          StartButtonDisabled={sessionStarted}
          SecondWidth={disp_width * 2 / 3 * 0.668}
          NextButtonAction={() => session.next()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },
  top_navbar: {
    flexDirection: 'row',
    alignContent: 'space-around',
  },
});
