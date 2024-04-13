import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

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
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (text: string) => {
    const filtered = data.filter(item =>
      item.label.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchText(text);
  };

  const handleSelect = (value: string, label: string) => {
    onSelect(value);
    setSearchText(label);
    setFilteredData([]);
  };

  return (
    <View>
      <TextInput
        style={styles.inputSearch}
        placeholder="Поиск"
        onChangeText={filterData}
        value={searchText}
      />
      {filteredData.map(item => (
        <TouchableOpacity
          key={item.value}
          style={styles.dropdownItem}
          onPress={() => handleSelect(item.value, item.label)}>
          <Text style={styles.itemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function ChoosePat({ navigation }: { navigation: any }) {
  const [selectedPathology, setSelectedPathology] = useState<string>('');

  const loadScene = () => {
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
      <Button title="Нет моей паталогии" onPress={handleNoPathology} color={'#666'} />
      <Button title="Далее" onPress={loadScene} color={'#6CCAFF'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '300',
    marginBottom: 20,
  },
  inputSearch: {
    height: 40,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#fff',
    backgroundColor: '#333',
  },
  dropdownItem: {
    backgroundColor: '#6CCAFF',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  itemText: {
    color: '#fff',
  },
});