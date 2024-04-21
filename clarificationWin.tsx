import * as React from 'react';
import { StyleSheet, Text, Button, Modal, View} from 'react-native';
import styles from './styles/styles';
import { AntDesign } from '@expo/vector-icons';


interface TooltipProps { 
    modalWindow:boolean;
    textHead:string;
    textBody:string;
    func1: () => void;
    func2: () => void;
    textBut1:string;
    textBut2:string;
    toggleModal: () => void
}

export default function ClareficationWin({modalWindow, textHead, textBody, textBut1, textBut2, func1, func2,toggleModal} : TooltipProps): React.ReactElement<TooltipProps> {

    return(
           <Modal
           visible={modalWindow}
           transparent={true}
           >
                <View style={styles1.centeredView}>
                    <View style={styles1.modalView}>
                        <AntDesign name='close' style={styles1.close} size={24} color='#B6FFFB' onPress={() => toggleModal()}/>
                        <Text style={styles.textTitle}>{textHead}</Text>
                        <Text style={styles.textModalWindow}>{textBody}</Text>
                        <Button title={textBut1} onPress={() => func1()}></Button>
                        <Button title={textBut2} onPress={() => func2()}></Button>
                    </View>
                </View>
           </Modal>
        
    )
}

const styles1 = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "ffff0000",
        marginTop: 22,
    },
    modalView: {
        backgroundColor: '#93949A',
        borderRadius: 8,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    checkbox: {
        margin: 8,
    },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    close:{
        alignSelf: 'flex-end',
        marginTop: -5,
        position: 'absolute',
    },
})