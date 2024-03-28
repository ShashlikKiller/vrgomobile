import { Text } from "react-native";

interface Props {
    currentExercise: number;
    totalExercises: number;
  }

const ExerciseProgression: React.FC<Props> = ({ currentExercise, totalExercises }) => {
    return (
        <div style={{width: '100%', height: '100%', padding: 4, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
<div style={{paddingLeft: 2, paddingRight: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
<div style={{color: '#B6FFFB', fontSize: 19, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
    <Text>{currentExercise} / {totalExercises}</Text></div>
</div>
</div>
    );
};

export default ExerciseProgression;