import { Image } from 'react-native';

export default function ExerciseScreen() {
  return (
    <div>
      <button>Назад</button>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <div>{2} из {3}</div>
            <div style={{ marginTop: '0.5em' }}>Упражнений</div>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <div>ПОСТАВЬТЕ 2 БУТЫЛКИ</div>
        <Image source={require("@/assets/images/exercise_img_example.png")} alt="Изображение с инструкцией" />
        <div>
          <span>[1]</span>
          <span> ШАГНИТЕ</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0 }}>00:00</div>
      <button style={{ position: 'absolute', bottom: 0, right: 0 }}>Далее</button>
    </div>
  );
};