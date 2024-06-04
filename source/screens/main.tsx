import { BodypartsSelected } from "@components/bodypartsSelected";
import { StartExercisesButton } from "@components/buttonsComponent";
import DropdownComponent from "@components/patologyDropdownComponent";
import { NavigationContext } from "@navigations/navigate";
import { IDataProvider, Path } from "@scripts/interfaces/content-provider/IDataProvider";
import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ChoseBodyPart } from "./choosingBodyPart";

const { width: disp_width } = Dimensions.get('window');

export default function MainScreen({navigation}: {navigation: any}) {
    const [selectedPathology, setSelectedPathology] = useState<string>('');
    const [selectedBodyParts, setSelectedBodyParts] = useState<string[]>([]);
    //const [isFocused, setIsFocused] = useState(false);
    
    const { data, setData } = useContext(NavigationContext);
    
    let dataProvider = data.dataProvider as IDataProvider;
    
    const loadExerciseScene = () => {
      navigation.navigate('SessionScreen')
    }

    const loadBodyPartScene = () => {
      navigation.navigate('ChoosingBodyPart', {backScene: 'MainScreen'})
    }

    var BodyParts: string[] = [];
    useEffect(()=>{
      dataProvider.Get<ChoseBodyPart>(Path.choseBodyPart)
        .then( result =>{
          if(result?.isCheckedLeftHand && result?.isCheckedRightHand){
              BodyParts.push("Левая и правая рука");
          }
          else if(result?.isCheckedLeftHand){
            BodyParts.push("Левая рука");
          }
          else if(result?.isCheckedRightHand){
            BodyParts.push("Правая рука");
          }

        if(result?.isCheckedLeftLeg && result?.isCheckedRightLeg){
            BodyParts.push("Левая и правая нога");
        }
        else if(result?.isCheckedLeftLeg){
          BodyParts.push("Левая нога");
        }
        else if(result?.isCheckedRightLeg){
          BodyParts.push("Правая нога");
        }
      setSelectedBodyParts(BodyParts);
      })
    },[])  

    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={{...styles.text, marginTop: 30}}> Ваша патология верна?</Text>
          <View style={{position: 'absolute', top: 60, zIndex: 10}}>
          <DropdownComponent onSelect={setSelectedPathology} dataProvider={dataProvider}></DropdownComponent>
          </View>
          <View style={{flex: 1, marginTop: '15%'}}>
            <Text style={styles.text}> Верны ли области упражнений?</Text>
            <View style={{width: disp_width - sideMargin*2, height: 200}}>
              <BodypartsSelected bodyparts={selectedBodyParts} onPress={loadBodyPartScene}></BodypartsSelected>
            </View>
          </View>
          <StartExercisesButton
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