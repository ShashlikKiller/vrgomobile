import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { BackButtonLittle, NextButton, StartButtonEmpty } from '@components/buttonsComponent';
import ExerciseComponent from '@components/exerciseComponent';
import { ClearStackAndNavigate } from '@navigations/navigate';
import { disp_height, disp_width } from '@scripts/utils/Const';
import { useEffect, useState } from 'react';
import { Session, SessionEvent } from '@scripts/models/Session';
import { Exercise } from '@scripts/models/Exercise';

var sessionDefault = new Session(); 
export default function doExercise({navigation}: {navigation: any}){
  var [session, setSession] = useState<Session>(new Session());
  var [sessionStarted, setSessionStarted] = useState(false);
  var [runTime, setRunTime] = useState(0);
  var [exercise, setExercise]= useState<Exercise>(new Exercise(1, 5, "Поставьте две бутылки на расстоянии 1,5 м,",["Пройдите над бутылками гемиплегичной ногой.", "Развернитесь и начните снова"], "https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album"));
  
  useEffect(() => {
    (async function() {
    const emitter = session!.emitter;
    emitter.addListener(SessionEvent.refreshExerciseNotify, refreshExerciseHandler);
    emitter.addListener(SessionEvent.refreshRunTimeNotify, refreshRunTimeHandler);

    session!.enqueue(new Exercise(1, 5, "Поставьте две бутылки на расстоянии 1,5 м,",["Пройдите над бутылками гемиплегичной ногой.", "Развернитесь и начните снова"], "https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album"));
    session!.enqueue(new Exercise(2, 5, "Передвиньте бутылки на 2 метра вперед,",["Сделайте шаг назад, затем влево и вправо", "Посмотрите в окно и послушайте это весеннее чириканье птичек,", "Насладитесь этим прекрасным днем."], "https://sun9-42.userapi.com/impg/fEvxHf8mpXulAPGdg4BMvLIhxxjyw64EWB0ESw/zBDIDjYdTT4.jpg?size=656x438&quality=96&sign=89698193cc9ea3648bb9cc29cec65a09&type=album"));
    let ex = session!.init();
    setExercise(ex)})();
  }, []);
 
  const refreshRunTimeHandler = (runTime: number) => {
    setRunTime(runTime);
  };
  const loadScene = () => {
    navigation.navigate('initialScreen')
    navigation.popToTop()
  }
  const clearStackAndNavigate = () => {
    ClearStackAndNavigate(navigation, 'mainScreen');
  }
  const refreshExerciseHandler = () => {
    console.debug("refreshExerciseHandler", session.currentExercise);
    setExercise(session!.currentExercise)
  } 
    return( 
      <>
        <View style={styles.container}>
          <BackButtonLittle action={clearStackAndNavigate}></BackButtonLittle>
          <ExerciseComponent exercise={exercise} />
          <View style={styles.btnContainer}>
            <View style={{width: disp_width * 1 / 2 * 0.851, height: disp_height / 16}}>
              <StartButtonEmpty action={() => session!.start()} title={Math.ceil((runTime+300)/1000).toString()} disabled={sessionStarted}/>
            </View>
            <View style={{width: disp_width * 2 / 3 * 0.668}} >
              <NextButton action={() => setExercise(session!.next())}/> 
            </View>
          </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    marginBottom: 10
  },
})


