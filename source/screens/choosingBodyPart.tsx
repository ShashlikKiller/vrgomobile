import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, Dimensions} from 'react-native';
import Checkbox from 'expo-checkbox';
import { HelpButton, UnderstandButton, BackButton, NextButton } from '@components/buttonsComponent';
//import { FileIO } from '../Model/FileIO';

const { width: disp_width, height: disp_height } = Dimensions.get('window');
// Получаем разрешение экрана

export default function choosingBodyPart({navigation}: {navigation: any}) {

  const [isCheckedModalWin, setCheckedModalWin] = useState(false);
  const [modalWindow, setModalWindow] = useState(true);

  // Логические выражения поврежденных частей тела:
  const [isCheckedRightHand, CheckRightHand] = useState(false);
  const [isCheckedLeftHand, CheckLeftHand] = useState(false);
  const [isCheckedRightLeg, CheckRightLeg] = useState(false);
  const [isCheckedLeftLeg, CheckLeftLeg] = useState(false);


  //let fileIO: FileIO = new FileIO()

  const loadScene = () => {
    navigation.navigate('choosePat')
  }
  const loadExerciseScene = () => {
    // пишем в файл, что паталогии и части тела назначены p.s. не работает в браузере
    // fileIO.Set(1 ,"./View/have_pat.txt")
    // .then(() => console.log("success"))
    // .catch(function(e) {console.log(e)})
    navigation.navigate('doExercise')
  }

  return (
    <View style={{...styles.background}}>
            <HelpButton action={() => setModalWindow(true)}></HelpButton>
            <Modal visible={modalWindow}>
           <Text> Инструкция</Text>
           <Text>Аватар будет к вам лицом. 
                 Вам необходимо нажать на те части аватара, где у вас находятся нарушения. 
                 С этими областями вам будет предложено работать через упражнения. 
                 Вы всегда сможете изменить их, вернувшись на соответствующий экран.                
            </Text>
           <Checkbox
               value={isCheckedModalWin}
               onValueChange={setCheckedModalWin}
               color={isCheckedModalWin ? '#4630EB' : undefined}/>

           <Text>Больше не показывать</Text>

           <UnderstandButton action={() => setModalWindow(false)}></UnderstandButton>

       </Modal>

    <View style={{...styles.container}}>
      <View style={styles.row}>
      <TouchableOpacity 
      style=
      {
        {
        ...styles.expanded, 
        backgroundColor: isCheckedRightHand ? '#393220' : '#323939'
        }
      } 
      onPress={() => CheckRightHand(!isCheckedRightHand)}>
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
      <View style={styles.bottom_btn_navbar}>
      <BackButton action={loadScene} />
        <NextButton action={loadExerciseScene} />
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
    transform: [{scale: (disp_width/disp_height) * disp_height/620}],
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
});