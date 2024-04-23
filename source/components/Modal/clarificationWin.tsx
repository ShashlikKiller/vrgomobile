import * as React from 'react';
import { StyleSheet, Text, Button, Modal, View} from 'react-native';


interface TooltipProps { 
    isVisibleWindow:boolean;
    header:string;
    body:string;
    agreeHandler: () => void;
    disagreeHandler: () => void;
}

export default function TooltipWin({isVisibleWindow: modalWindow, header, body, agreeHandler, disagreeHandler} : TooltipProps): React.ReactElement<TooltipProps> {

    return(
        <View>
           <Modal
           visible={modalWindow}
           >
                <Text>{header}</Text>
                <Text>{body}</Text>
                <Button title='Понятно' onPress={() => agreeHandler()}></Button>
                <Button title='Понятно' onPress={() => disagreeHandler()}></Button>
           </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    checkbox: {
        margin: 8,
      }
})