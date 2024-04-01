import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, Button, Modal, View} from 'react-native';


interface TooltipProps { 
    modalWindow:boolean;
    textHead:string;
    textBody:string;
    func1: () => void;
    func2: () => void;
}

export default function TooltipWin({modalWindow, textHead, textBody, func1, func2} : TooltipProps): React.ReactElement<TooltipProps> {

    return(
        <View>
           <Modal
           visible={modalWindow}
           >
                <Text>{textHead}</Text>
                <Text>{textBody}</Text>
                <Button title='Понятно' onPress={() => func1()}></Button>
                <Button title='Понятно' onPress={() => func2()}></Button>
           </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    checkbox: {
        margin: 8,
      }
})