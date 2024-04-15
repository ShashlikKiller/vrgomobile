import { Button, View, Text } from "react-native";

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
        <Text>Ваша паталогия верна?</Text>
        <Button
          title="Изменить"
          onPress={loadPatScene}
          color={'#B6FF1B'}
        />
        <Text>Верно ли выбраны поражённые части тела?</Text>
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

