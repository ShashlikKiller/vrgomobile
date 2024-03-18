import { Exercise } from "./Exercise";

export class Session {
    private _exerciseQueue: Exercise[];

    constructor() {
        this._exerciseQueue = [];
    }

    // Добавление упражнения в очередь
    enqueue(exercise: Exercise): void {
        this._exerciseQueue.push(exercise);
    }

    // Выполнение упражнений в очереди
    start(): void {
        const interval = setInterval(() => {
            const exercise = this._exerciseQueue.shift(); // Получаем первое упражнение из очереди
            if (exercise) {
                exercise.execute(); // Выполняем упражнение
                exercise.exerciseCompleted = () => {
                    if (this._exerciseQueue.length === 0) {
                        clearInterval(interval); // Остановить интервал, если очередь пуста
                    } else {
                        this.start(); // Переходим к следующему упражнению
                    }
                };
            } else {
                clearInterval(interval); // Остановить интервал, если очередь пуста
            }
        }, 1000);
    }
}