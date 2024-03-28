import { StyleSheet, Text } from "react-native";
  
  interface Props {
    stepNumb: number;
    step: string;
  }

const ExerciseStep: React.FC<Props> = ({ stepNumb, step }) => {
return (
<div style={{maxWidth: 2000, width: 'auto', height: '30%', maxHeight: 200, flex: 1, marginBottom: 15, background: 'rgba(182, 255, 251, 0.10)', border: '2px rgba(182, 255, 251, 0.20) solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
    <div style={{height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start',  display: 'flex'}}>
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{width: '100%', height: '100%', paddingLeft: 10, paddingRight: 10,  marginBottom: 2, background: 'rgba(35, 35, 35, 0.30)', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
                <div style={{ paddingLeft: 2, paddingRight: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div style={{textAlign: 'center', color: '#B6FFFB', fontSize: 19, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{stepNumb}</div>
                </div>
            </div>
        </div>
    </div>
    <Text style={styles1.StepDescription}>{step}</Text>
</div>
);
};

const styles1 = StyleSheet.create({
    StepDescription: {
        flex: 1,
        color: 'rgba(255, 255, 255, 0.70)',
        fontSize: 18,
        fontFamily: 'Roboto Mono',
        fontWeight: '300'
      },
});
export default ExerciseStep;