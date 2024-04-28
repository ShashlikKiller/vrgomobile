import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";
import { Exercise } from "./Exercise";
import { Timer } from "@utils/Timer";
import Navigate, { ClearStackAndNavigate } from "@navigations/navigate";

export class Session {
    private _exerciseQueue: Exercise[];
    public emitter = new EventEmitter();
    public timer: Timer;
    private _currExercise: Exercise | undefined;
    private _navigation: any;

    constructor() {
        this._exerciseQueue = [];
        this.timer = new Timer(0);
    }

    public get runTime() {
        return this.timer.runTime
    }
    
    public get currExercise() {
        return this._currExercise
    }

    public set currExercise(val) {
        this._currExercise = val
    }

    public get navigation() {
        return this._navigation
    }

    public set navigation(val) {
        this._navigation = val
    }

    // Добавление упражнения в очередь
    enqueue(exercise: Exercise): void {
        this._exerciseQueue.push(exercise);
        console.log(this._exerciseQueue.length)
        // this._currExercise = exercise
    }

    executeExercise = () => {
        if (this._currExercise){
            this.timer = new Timer(this._currExercise.execTimeSec);
            const timerRefreshRate = 1000 // 1 секуда
            this.emitter.emit('refreshRunTime', 1)
            setInterval(() => {this.emitter.emit('refreshRunTime', this.runTime)}, timerRefreshRate)
            this.timer.startTimer()
        }
    }

    nextExercise = () => {
        if (this._exerciseQueue.length == 0) {
            ClearStackAndNavigate({navigation:this.navigation, path:"mainScreen"})
            // this.navigation.navigate('mainScreen')
            return
        }
        const exercise = this._exerciseQueue.shift(); // Получаем первое упражнение из очереди
        this._currExercise = exercise
        this.emitter.emit('refreshExercise', exercise)
    }

    notifyExerciseIsOver() {

    }

    // Выполнение упражнений в очереди
    start():void {
        // const interval = setInterval(() => {
        //     const exercise = this._exerciseQueue.shift(); // Получаем первое упражнение из очереди
        //     if (exercise) {
        //         this.emitter.emit('refreshExercise', exercise);
        //         exercise.execute(); // Выполняем упражнение
        //         exercise.exerciseCompleted = () => {
        //             if (this._exerciseQueue.length === 0) {
        //                 clearInterval(interval); // Остановить интервал, если очередь пуста
        //             } else {
        //                 this.start(); // Переходим к следующему упражнению
        //             }
        //         };
        //     } else {
        //         clearInterval(interval); // Остановить интервал, если очередь пуста
        //     }
        // }, 1000);
        
    }
}