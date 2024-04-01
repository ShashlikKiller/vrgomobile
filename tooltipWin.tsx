import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, Button, Modal, View} from 'react-native';
import Checkbox from 'expo-checkbox';


interface TooltipProps { 
    modalWindow:boolean;
    textHead:string;
    textBody:string;
    toggleModal: () => void
}

export default function TooltipWin({modalWindow, textHead, textBody, toggleModal} : TooltipProps): React.ReactElement<TooltipProps> {

    const [isCheckedModalWin, setCheckedModalWin] = useState(false);

    return(
        <View>
           <Modal
           visible={modalWindow}
           >
                <Text>{textHead}</Text>
                <Text>{textBody}</Text>
                <Checkbox
                   style={styles.checkbox}
                   value={isCheckedModalWin}
                   onValueChange={setCheckedModalWin}
                   color={isCheckedModalWin ? '#4630EB' : undefined}
                />
                <Text>Больше не показывать</Text>
                <Button title='Понятно' onPress={() => toggleModal()}></Button>
           </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    checkbox: {
        margin: 8,
      }
})