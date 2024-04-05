import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const data = [
  { label: 'Инсульт', value: '1' },
  { label: 'Инфаркт', value: '2' },
  { label: 'Инклюзия', value: '3' },
  { label: 'Красный нос', value: '4' },
  { label: 'Простуда', value: '5' },
  { label: 'Кашель', value: '6' },
  { label: 'Мозг рака', value: '7' },
];

const DropdownComponent = ({ onSelect }: { onSelect: (value: string) => void }) => {
  const [searchText, setSearchText] = useState('');
  const [value, setValue] = useState<string>('');

  const filteredData = data.filter(item =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View>
      <TextInput
        style={styles.inputSearch}
        placeholder="Поиск"
        onChangeText={setSearchText}
        value={searchText}
      />
      <DropDownPicker
        items={filteredData.map(item => ({ label: item.label, value: item.value }))}
        defaultValue={value}
        containerStyle={styles.dropdown}
        onChangeItem={item => {
          setValue(item.value);
          onSelect(item.value);
        }}
        searchable={true}
        searchablePlaceholder="Поиск"
        searchableError="Ничего не найдено"
        placeholder="Выберите патологию"
      />
    </View>
  );
};

export default function ChoosePat({ navigation }: { navigation: any }) {
  const [selectedPathology, setSelectedPathology] = useState<string>('');

  const loadScene = () => {
    // Можно добавить действие с паталогией
    navigation.navigate('choosingBodyPart', { selectedPathology });
  };

  const handleNoPathology = () => {
    setSelectedPathology('no-pathology');
    loadScene();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Начните вводить патологию или нарушение необходимое к физиотерапии
      </Text>
      <DropdownComponent onSelect={setSelectedPathology} />
      <Button title="Далее" onPress={loadScene} color={'#B6FFFB'} />
      <Button title="Нет моей паталогии" onPress={handleNoPathology} color={'#B6FFFB'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '300',
  },
  dropdown: {
    marginVertical: 16,
    width: 300,
  },
  inputSearch: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 300,
  },
});
