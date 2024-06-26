import * as React from 'react';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, Dimensions} from 'react-native';
import Checkbox from 'expo-checkbox';
import { HelpButton, UnderstandButton, NextButton, BackButton, NextButtonEnabling } from '@components/buttonsComponent';
import { NavigationContext, Screens } from '@navigations/navigate';
import { IDataProvider, Path } from '@scripts/interfaces/content-provider/IDataProvider';
import TooltipWin from '@components/Modal/tooltipWin';

// Получаем разрешение экрана
const { width: disp_width, height: disp_height } = Dimensions.get('window');

export type ChoseBodyPart = {
   isCheckedRightHand : Boolean,
   isCheckedLeftHand : Boolean,
   isCheckedRightLeg : Boolean,
   isCheckedLeftLeg : Boolean,
}


export default function СhoosingBodyPart({navigation}: {navigation: any}) {
  let buttonDisabled: boolean = false

  const text_1: string = "Аватар будет к вам лицом. \nВам необходимо нажать на те части аватара, где у вас находятся нарушения. \nС этими областями вам будет предложено работать через упражнения. Вы всегда сможете изменить их, вернувшись на соответствующий экран."
  const text_2: string ='Вам необходимо нажать на те части аватара, где у вас находятся нарушения. \nС этими областями вам будет предложено работать через упражнения. Вы всегда сможете изменить их, вернувшись на соответствующий экран.'
  
  const [isCheckedModalWin, setCheckedModalWin] = useState(false);
  const toggleModal2 = () => {
    setCheckedModalWin(!isCheckedModalWin);
  }
  const [modalWindow, setModalWindow] = useState(true);
  const toggleModal = () => {
    setModalWindow(!modalWindow);
  }

  // Логические выражения поврежденных частей тела:
  const [isCheckedRightHand, CheckRightHand] = useState(false);
  const [isCheckedLeftHand, CheckLeftHand] = useState(false);
  const [isCheckedRightLeg, CheckRightLeg] = useState(false);
  const [isCheckedLeftLeg, CheckLeftLeg] = useState(false);

  const { data, setData } = useContext(NavigationContext);
  
  let dataProvider = data.dataProvider as IDataProvider;

  const loadScene = () => {
    navigation.navigate(Screens.MainScreen)
  }
  const loadExerciseScene = () => {
    let chose: ChoseBodyPart = {
      isCheckedRightHand: isCheckedRightHand,
      isCheckedLeftHand: isCheckedLeftHand,
      isCheckedRightLeg: isCheckedRightLeg,
      isCheckedLeftLeg: isCheckedLeftLeg,
  };
  dataProvider.Set(chose, Path.choseBodyPart);
    navigation.navigate(Screens.SessionScreen)
  }

  return (
    <View style={{...styles.background}}>
      <View style={{width: disp_width, marginTop: '12%'}}>
        <HelpButton action={() => setCheckedModalWin(true)}></HelpButton>
        <TooltipWin modalWindow = {modalWindow} textHead = 'Инструкция' textBody = {text_1} toggleModal = {toggleModal}/>
        <TooltipWin modalWindow = {isCheckedModalWin} textHead = 'Инструкция2' textBody = {text_2} toggleModal = {toggleModal2}/>
      </View>
    <View style={{...styles.container}}>
      <View style={styles.row}>
      <TouchableOpacity style={{...styles.expanded, backgroundColor: isCheckedRightHand ? '#393220' : '#323939'}} onPress={() => CheckRightHand(!isCheckedRightHand)}>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <Text style={{...styles.sideText, textAlign: 'left', marginLeft: 15, marginTop: 15}}>Правая</Text>
              <Text style={{...styles.sideText, textAlign: 'left', marginLeft: 15}}>Сторона</Text>
            </View>
            <View style={{marginLeft: 16, marginBottom: 16}}>
            <Text style={{...styles.text, textAlign: 'left', marginBottom: 8, color: isCheckedRightHand ? '#FFB800' : '#FFFFFF'}}>рука</Text>
            <Image style={{opacity: isCheckedRightHand ? 1 : 0}} source={require('@images/button/checkcircle.png')}></Image>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.expanded, backgroundColor: isCheckedLeftHand ? '#393220' : '#323939'}} onPress={() => CheckLeftHand(!isCheckedLeftHand)}>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
             <Text style={{...styles.sideText, textAlign: 'right', marginRight: 15, marginTop: 15}}>Левая</Text>
              <Text style={{...styles.sideText, textAlign: 'right', marginRight: 15}}>Сторона</Text>
            </View>
            <View style={{marginRight: 16, marginBottom: 16}}>
            <Text style={{...styles.text, textAlign: 'right', marginBottom: 8, color: isCheckedLeftHand ? '#FFB800' : '#FFFFFF'}}>рука</Text>
            <Image style={{alignSelf: 'flex-end', opacity: isCheckedLeftHand ? 1 : 0}} source={require('@images/button/checkcircle.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
      <View style={{...styles.row}}>
        <TouchableOpacity style={{...styles.expanded, backgroundColor: isCheckedRightLeg ? '#393220' : '#323939'}} onPress={() => CheckRightLeg(!isCheckedRightLeg)}>
        <View style={{marginLeft: 16, marginTop: 16}}>
            <Text style={{...styles.text, textAlign: 'left', marginBottom: 8, color: isCheckedRightLeg ? '#FFB800' : '#FFFFFF'}}>нога</Text>
            <Image style={{opacity: isCheckedRightLeg ? 1 : 0}} source={require('@images/button/checkcircle.png')}></Image>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.expanded, backgroundColor: isCheckedLeftLeg ? '#393220' : '#323939'}} onPress={() => CheckLeftLeg(!isCheckedLeftLeg)}>
        <View style={{marginRight: 16, marginTop: 16}}>
            <Text style={{...styles.text, textAlign: 'right', marginBottom: 8, color: isCheckedLeftLeg ? '#FFB800' : '#FFFFFF'}}>нога</Text>
            <Image style={{alignSelf: 'flex-end', opacity: isCheckedLeftLeg ? 1 : 0}} source={require('@images/button/checkcircle.png')}></Image>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer} >
        <View style={{width: disp_width * 0.34, marginBottom: '2%'}}>
          <BackButton action={loadScene} />
        </View>
        <View style={{width: disp_width * 0.62, marginBottom: '2%'}}>
          <NextButtonEnabling action={loadExerciseScene} enabled={(isCheckedRightHand || isCheckedLeftHand || isCheckedLeftLeg || isCheckedRightLeg)} title=''/>
        </View>
      </View>
      <View style={styles.bodypartsview}>
        <View pointerEvents='none' style={{alignSelf: 'center', marginBottom: 5 }}>
        <Image resizeMode='contain' source={require('@images/bodyparts/head.png')}/>
        </View>        
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <TouchableOpacity style={{marginTop: 25, paddingRight: 2}} onPress={() => CheckRightHand(!isCheckedRightHand)}>
          <Image  source={isCheckedRightHand ? require('@images/bodyparts/righthand_on.png') : require('@images/bodyparts/righthand_off.png')}/>
          </TouchableOpacity>
          <View pointerEvents='none' style={{}}>
            <Image source={require('@images/bodyparts/body.png')} />
          </View>
          <TouchableOpacity style={{marginTop: 25, paddingLeft: 4}} onPress={() => CheckLeftHand(!isCheckedLeftHand)}>
            <Image source={isCheckedLeftHand ? require('@images/bodyparts/lefthand_on.png') : require('@images/bodyparts/lefthand_off.png')} />
          </TouchableOpacity>
        </View>
        <View  style={{ marginTop: -105, flexDirection: 'row', alignContent: 'center', alignSelf: 'center'}}>
        <TouchableOpacity onPress={() => CheckRightLeg(!isCheckedRightLeg)}>
          <Image  resizeMode='contain' style={{marginRight: 5}} source={isCheckedRightLeg ? require('@images/bodyparts/rightleg_on.png') : require('@images/bodyparts/rightleg_off.png')}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => CheckLeftLeg(!isCheckedLeftLeg)}>
          <Image  resizeMode='cover' style={{marginLeft: 5}} source={isCheckedLeftLeg ? require('@images/bodyparts/leftleg_on.png') : require('@images/bodyparts/leftleg_off.png')}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  );
  };
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#232323',
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#232323',
    margin: 2,
  },
  bodypartsview: {
    top: 0,
    left: '50%',
    right: 0,
    bottom: 0,
    width: 1,
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'center', 
    justifyContent: 'center',
    transform: [{scale: (disp_width/disp_height) * disp_height/620 * 0.9}],
    marginBottom: disp_height * 0.2
  },
  sideText: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: '#FFFFFF',
    opacity: 0.7
    },
  row: {
    flex: 1,
    flexDirection: 'row',
    margin: 1
  },
  bottom_btn_navbar: {
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  expanded: {
    flex: 1,
    backgroundColor: '#323939',
    margin: 2,
  },
  text: {
    fontSize: 19,

    fontFamily: 'Inter',
    fontWeight: '400',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-end',
    marginBottom: '2%',
    marginTop: '24%'
  },
});