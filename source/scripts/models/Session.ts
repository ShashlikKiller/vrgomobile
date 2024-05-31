import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";
import { Exercise } from "./Exercise";
import { Timer } from "@utils/Timer";
import Navigate, { ClearStackAndNavigate } from "@navigations/navigate";
const timerRefreshRate = 1000 // 1 секуда

export class Session {
    
    public emitter = new EventEmitter();

    private _exerciseQueue: Exercise[];
    private _timer!: Timer;
    private _currentExercise!: Exercise;
    private _intervalID! : NodeJS.Timeout;
    private _isStarted: Boolean  = false;
    private _isInited: boolean  = false;


    public get isStarted(){ return this._isStarted }

    public get runtime() { return this._timer.runTime }
    
    public get currentExercise() { return this._currentExercise }
    public set currentExercise(val) { this._currentExercise = val }



    constructor() {
        this._exerciseQueue = [];
        this._timer = new Timer(0);
        this._isInited = false;
        this._isStarted = false;
    }

    // Добавление упражнения в очередь
    enqueue(exercise: Exercise): void {
        this._exerciseQueue.push(exercise);
    }

    getQueueLength(): number {
        return this._exerciseQueue.length
    }

    init(): Exercise  {
        console.debug("init:Session");

        if(this._exerciseQueue.length === 0){
        
            console.error("В очереде не оказалось упражнений: Session");
            return Exercise.emptyExercise;
        }
        
        const exercise = this._exerciseQueue.shift(); // Получаем первое упражнение из очереди

        if(exercise === null){
            
            console.error("Упражнение оказалось null: Session")
            return Exercise.emptyExercise;
        }
        
        this._currentExercise = exercise!;

        this._isInited = true;
        
        return this._currentExercise;
    }

    start(): void{
        if(!this._isInited) return;
        this.executeExercise();
        this._isStarted = true;
    }

    stopTimer(): void{
        console.debug('stop timer');
        // заглушка
    }
    continueTimer(): void{
        console.debug('continue timer');
        // заглушка
    }

    next(): Exercise {
        
        if(this._isStarted){
            if(this._exerciseQueue.length === 0){
                this.close();
            }

            const exercise = this._exerciseQueue.shift(); // Получаем первое упражнение из очереди
            
            if(exercise != null){
                this._currentExercise = exercise!;
            }


            this.emitter.emit(SessionEvent.refreshExerciseNotify, this._currentExercise);
        }
        return this._currentExercise;
    }

    close(): void {

        clearInterval(this._intervalID);

        this.emitter.emit(SessionEvent.closeSessionNotify, this._currentExercise);
        
        this._isStarted = false;
        this._isInited = false;
    } 

    private executeExercise(): void {

        this.emitter.emit(SessionEvent.refreshRunTimeNotify, 0);
        
        this._timer = new Timer(this._currentExercise.execTimeSec);
        
        this._intervalID = setInterval(() => {this.emitter.emit(SessionEvent.refreshRunTimeNotify, this.runtime)}, timerRefreshRate);
        
        this._timer.startTimer();
    }
}
export enum SessionEvent{
    refreshExerciseNotify = "refreshExercise",
    refreshRunTimeNotify = "refreshRunTime",
    closeSessionNotify = "exerciseOver"
}