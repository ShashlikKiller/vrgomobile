import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal} from 'react-native';
import { Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import TooltipWin from './tooltipWin';
import {Patient} from './Patient';

export default function choosingBodyPart({navigation}: {navigation: any}) {

  const [modalWindow2, setModalWindow2] = useState(true);
  const toggleModal2 = () => {
    setModalWindow2(!modalWindow2);
  }

  const [modalWindow, setModalWindow] = useState(false);

  const toggleModal = () => {
    setModalWindow(!modalWindow);
  }

  const [isCheckedLeftArm, setCheckedLeftArm] = useState(false);
  const [isCheckedRightArm, setCheckedRightArm] = useState(false);
  const [isCheckedLeftLeg, setCheckedLeftLeg] = useState(false);
  const [isCheckedRightLeg, setCheckedRightLeg] = useState(false);

  const navigationBack = () => {
    navigation.navigate('choosePat')
  }
  const navigationNext = () => {
    if(isCheckedLeftArm){patient.affectedRegion.push('Левая рука')}
    if(isCheckedRightArm){patient.affectedRegion.push('Правая рука')}
    if(isCheckedLeftLeg){patient.affectedRegion.push('Левая нога')}
    if(isCheckedRightLeg){patient.affectedRegion.push('Правая нога')}
    navigation.navigate('choosePat')
  }

  return (
    <View>
      <TooltipWin modalWindow={modalWindow2} textHead='1' textBody='1' toggleModal={toggleModal2}/>
      <Button title='Подсказка' onPress={() => toggleModal()}></Button>
      <TooltipWin modalWindow={modalWindow} textHead='2' textBody='2' toggleModal={toggleModal}/>
      <Text style={styles.container}> Выбор части тела</Text> 
      <Text>Левая рука</Text>
      <Checkbox
          style={styles.checkbox}
          value={isCheckedLeftArm}
          onValueChange={setCheckedLeftArm}
          color={isCheckedLeftArm ? '#4630EB' : undefined}
        />
      <Text>Правая рука</Text>
      <Checkbox
          style={styles.checkbox}
          value={isCheckedRightArm}
          onValueChange={setCheckedRightArm}
          color={isCheckedRightArm ? '#4630EB' : undefined}
        />
      <Text>Левая нога</Text>
      <Checkbox
          style={styles.checkbox}
          value={isCheckedLeftLeg}
          onValueChange={setCheckedLeftLeg}
          color={isCheckedLeftLeg ? '#4630EB' : undefined}
        />
      <Text>Правая нога</Text>
      <Checkbox
          style={styles.checkbox}
          value={isCheckedRightLeg}
          onValueChange={setCheckedRightLeg}
          color={isCheckedRightLeg ? '#4630EB' : undefined}
      />
      <Button
      title="Назад"
      onPress={navigationBack}
      />
      <Button
        title="Далее"
        onPress={navigationNext}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignContent:'flex-start'
  },
  checkbox: {
    margin: 8,
  },
});
