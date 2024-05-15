import { Exercise } from "@models/Exercise";
import { IFactory } from "../../interfaces/IFactory";

export class FactoryExample implements IFactory<Exercise> {
    Create(): Exercise {
        let randint = randomInt(1, 3)
        let exercise: Exercise = {} as Exercise;
        switch (randint) {
            case 1:
                {
                    exercise.description = "Первое упражнение: описание description абвгдеежзиклмупрстиюяьъ";
                    exercise.instruction = ["Шаг 1", "Шаг 2"];
                    exercise.image = "https://sun9-61.userapi.com/impg/jgcY470LjHGaxVeic2d6EgmJF9oplAb4FaPthQ/buL-rIXZVHo.jpg?size=736x912&quality=95&sign=305eceb3dd857d3c4d436a7954357f71&type=album";
                // Картинка 736х912
                }
            case 2:
                {
                    exercise.description = "Второе упражнение: абвгдеежзиклмупрстиюяьъ";
                    exercise.instruction = ["Шаг 1", "Шаг 2", "Шаг 3(+1)"];
                    exercise.image = "https://sun9-28.userapi.com/impg/9nbrciXNI-WtpuKMznTioESJAFGzaE8cCqtzuw/7rIVbFKbP4Q.jpg?size=1080x834&quality=95&sign=09f86b12d8e538e21102a2d4f2101963&type=album";
                // Картинка 1080х834
                }
            default:
            case 3:
                {
                    exercise.description = "";
                    exercise.instruction = ["Шаг 1", "Шаг 2", "Шаг 3(+1)", "Шаг 4(+2)"];
                    exercise.image = "https://sun9-45.userapi.com/impg/Wzzi4p0gQ6v1cUymLk7B3RR94iA7Km1fkgNIEw/jp-T16gRikg.jpg?size=604x341&quality=95&sign=b34ec7e2c47c46a5fb45d24ed2f920cf&type=album";
                // Картинка 604х341
                }
        }
        return exercise;
    }
}

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;