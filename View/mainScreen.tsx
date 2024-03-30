import { Button, View } from "react-native";

export default function mainScreen({navigation}: {navigation: any}) {
    const loadScene = () => {
      navigation.navigate('doExercise')
    }
    const loadPatScene = () => {
      navigation.navigate('choosePat')
    }
    const loadBodyPartScene = () => {
      navigation.navigate('choosingBodyPart')
    }

    return (
      <View>
        Ваша паталогия верна?
        <Button
          title="Изменить"
          onPress={loadPatScene}
          color={'#B6FF1B'}
        />
        Верно ли выбраны поражённые части тела?
        <Button
          title="Изменить"
          onPress={loadBodyPartScene}
          color={'#B65FFB'}
        />
        <Button
          title="К упражнениям"
          onPress={loadScene}
          color={'#B6FFFB'}
        />
      </View>
    );
}

