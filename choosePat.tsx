import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {Patient} from './Patient';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Инсульт', value: '1' },
    { label: 'Инфаркт', value: '2' },
    { label: 'Инклюзия', value: '3' },
    { label: 'Красный нос', value: '4' },
    { label: 'Простуда', value: '5' },
    { label: 'Кашель', value: '6' },
    { label: 'Мозг рака', value: '7' },
    { label: 'Нет моей болезни', value: '8' },
  ];

export default function choosePat({navigation}: {navigation: any}) {
  const [nameOfPathology, setPathology] = useState<string>('');

  const loadScene = () => {
    patient.pathology = nameOfPathology;
    navigation.navigate('choosingBodyPart')
  }

  return( 
    <View style={styles.container}>
      <Text style={styles.text}>Начните вводить патологию или нарушение необходимое к физиотерапии</Text> 
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Выберите патологию"
        searchPlaceholder="Поиск"
        value={nameOfPathology}
        onChange={item => {
          setPathology(item.value);
        }}
      />
      <Button
        title="Далее"
        onPress={loadScene}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    textAlignVertical: 'bottom',
    color: 'black',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '300',
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonText: {
    color: '#232323',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  buttonStyle:{
    backgroundColor: '#B6FFFB',
  }
});
