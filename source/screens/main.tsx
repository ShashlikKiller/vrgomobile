import { BodypartsSelected } from "@components/bodypartsSelected";
import { StartExercisesButton } from "@components/buttonsComponent";
import DropdownComponent from "@components/patologyDropdownComponent";
import { DataProvider } from "@scripts/utils/DataProvider";
import { useState } from "react";
import { Button, View, Text, StyleSheet, Dimensions } from "react-native";

const { width: disp_width } = Dimensions.get('window');

export default function mainScreen({navigation}: {navigation: any}) {
  const [selectedPathology, setSelectedPathology] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

    const loadExerciseScene = () => {
      navigation.navigate('doExercise')
    }
    const loadBodyPartScene = () => {
      navigation.navigate('choosingBodyPart', {backScene: 'mainScreen'})
    }

    const exampleBodyparts: string[] = ['Левая и правая ноги', 'Правая рука'];


    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.text}> Ваша патология верна?</Text>
          <View style={{position: 'absolute', top: 60, zIndex: 10}}>
          <DropdownComponent onSelect={setSelectedPathology} dataProvider={DataProvider.GetInstance()}></DropdownComponent>
          </View>
          <View style={{flex: 1, marginTop: '15%'}}>
            <Text style={styles.text}> Верны ли области упражнений?</Text>
            <View style={{width: disp_width - sideMargin*2, height: 200}}>
              <BodypartsSelected bodyparts={exampleBodyparts} onPress={loadBodyPartScene}></BodypartsSelected>
            </View>
          </View>
          < StartExercisesButton
            action={loadExerciseScene}
          />
        </View>
      </View>
    );
}

const sideMargin = 16;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#232323',
    alignItems: 'center',
    padding: sideMargin
  },
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '300',
    fontSize: 19,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
    flexWrap: 'wrap',
    width: '100%'
  }
});