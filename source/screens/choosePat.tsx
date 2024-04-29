import DropdownComponent from '@components/patologyDropdownComponent';
import { DataProvider } from '@scripts/utils/DataProvider';
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const dataFromJson = [ // Здесь мы берем откуда-то массив патологий
  { label: 'Инсульт', value: '1' },
  { label: 'Инфаркт', value: '2' },
  { label: 'Инклюзия', value: '3' },
  { label: 'Красный нос', value: '4' },
  { label: 'Простуда', value: '5' },
  { label: 'Кашель', value: '6' },
  { label: 'Мозг рака', value: '7' },
  { label: 'Инсульт2', value: '8' }];

const NoPatology = {label: 'Нет моей патологии', value: '0'};

const sideMargin = 16;

const data = [...dataFromJson, NoPatology];


export default function choosePat({ navigation }: { navigation: any }) {
  const [selectedPathology, setSelectedPathology] = useState<string>('');

  const loadScene = () => {
    navigation.navigate('choosingBodyPart', { selectedPathology });
  };
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.guideText}>
          Начните вводить патологию или нарушение необходимое к физиотерапии
        </Text>
        <DropdownComponent onSelect={setSelectedPathology} dataProvider={DataProvider.GetInstance()}/>
        <Button title="Далее" onPress={loadScene} color={'#6CCAFF'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#232323',
    alignItems: 'center',
    padding: sideMargin
  },
  scrollbar: {
    backgroundColor: '#FFFFFF',
    width: 9,
    borderColor: '#343434',
    borderWidth: 2,
    height: '100%'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: sideMargin
  },
  guideText: {
    fontFamily: 'Inter',
    fontWeight: '300',
    fontSize: 23,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    width: '100%'
  }
});