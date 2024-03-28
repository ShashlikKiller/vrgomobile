import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal} from 'react-native';
import { Button } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function choosingBodyPart({navigation}: {navigation: any}) {

  const [modalWindow, setModalWindow] = useState(true);
  const [isCheckedModalWin, setCheckedModalWin] = useState(false);
  const [isCheckedLeftArm, setCheckedLeftArm] = useState(false);
  const [isCheckedRightArm, setCheckedRightArm] = useState(false);
  const [isCheckedLeftLeg, setCheckedLeftLeg] = useState(false);
  const [isCheckedRightLeg, setCheckedRightLeg] = useState(false);

  const loadScene = () => {
    navigation.navigate('choosePat')
  }
  return (
    <View>
      
      <Text style={styles.container}> Выбор части тела</Text> 
      <Button title='Подсказка' onPress={() => setModalWindow(true)}></Button>
      <Modal visible={modalWindow}>
          <Text> Инструкция</Text>
          <Text>Аватар будет к вам лицом. 
                Вам необходимо нажать на те части аватара, где у вас находятся нарушения. 
                С этими областями вам будет предложено работать через упражнения. Вы всегда сможете изменить их, вернувшись на соответствующий экран.                </Text>
          <Checkbox
              style={styles.checkbox}
              value={isCheckedModalWin}
              onValueChange={setCheckedModalWin}
              color={isCheckedModalWin ? '#4630EB' : undefined}
          />
          <Text>Больше не показывать</Text>
          <Button title='Понятно' onPress={() => setModalWindow(false)}></Button>
      </Modal>
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
        onPress={loadScene}
        color={'#B6FFFB'}
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
