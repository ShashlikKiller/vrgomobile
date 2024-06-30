import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";
import { Exercise } from "./Exercise";
import { Timer } from "@utils/Timer";
import Navigate, { ClearStackAndNavigate } from "@navigations/navigate";
import { ExerciseType } from "@scripts/descriptionOfExercises/allExercises";

const timerRefreshRate = 1000; // 1 секунда

export class Session {
    
    public emitter = new EventEmitter();
    public get runtime() { return this._timer.runTime; }
    public get currentExercise() { return this._currentExercise; }

    private _exerciseQueue: Exercise[] = [];
    private _timer: Timer;
    private _currentExercise: Exercise | null = null;
    private _intervalID: NodeJS.Timeout | null = null;
    private _isStarted: boolean = false;
    private _isInited: boolean = false;


    constructor() {
        this._timer = new Timer(0, this.timerOverHandler.bind(this));
        this.enqueue = this.enqueue.bind(this);
        this.dequeue = this.dequeue.bind(this);
    }

    // Добавление упражнения в очередь
    enqueue(exercise: Exercise): void {
        this._exerciseQueue.push(exercise);
    }

    getQueueLength(): number {
        return this._exerciseQueue.length;
    }

    init(): Exercise | null {
        if (this._exerciseQueue.length === 0) {
            console.error("В очереди не оказалось упражнений: Session");
            return null;
        }

        const exercise = this._exerciseQueue.shift()!;
        if (exercise === null) {
            console.error("Упражнение оказалось null: Session");
            return null;
        }

        this._currentExercise = exercise;
        this._isInited = true;

        return this._currentExercise;
    }

    stopTimer(): void {
        if (this._currentExercise?.exerciseType === ExerciseType.TIMER) {
            this._timer.pause();
            if (this._intervalID !== null) {
                clearInterval(this._intervalID);
                this._intervalID = null;
            }
        }
    }

    startTimer(): void {
        if (this._currentExercise?.exerciseType === ExerciseType.TIMER) {
            this._timer.start();
            this._intervalID = setInterval(() => {
                this.emitter.emit(SessionEvent.refreshRunTimeNotify, this.runtime);
            }, timerRefreshRate);
            this.emitter.emit(SessionEvent.refreshRunTimeNotify, this.runtime);
        }
    }

    dequeue(): Exercise | null {
        if (!this._isInited) {
            console.log("сессия не инициализированна Session:start");
            return null;
        }

        if (this._exerciseQueue.length === 0) {
            this.close();
            return null;
        }

        const exercise = this._exerciseQueue.shift()!;
        if (exercise != null) {
            this._currentExercise = exercise;
        }

        if (this.start()) {
            this.emitter.emit(SessionEvent.refreshExerciseNotify, this._currentExercise);
            return this._currentExercise;
        }
        return null;
    }

    private start(): boolean {
        if (!this._isInited) {
            console.log("сессия не инициализированна Session:start");
            return false;
        }
        this.executeExercise();
        this._isStarted = true;
        return this._isStarted;
    }

    close(): void {
        if (this._intervalID !== null) {
            clearInterval(this._intervalID);
            this._intervalID = null;
        }

        this.emitter.emit(SessionEvent.closeSessionNotify, this._currentExercise);
        this._isStarted = false;
        this._isInited = false;
    }

    private executeExercise(): void {
        if (this._currentExercise?.exerciseType === ExerciseType.TIMER) {
            this.emitter.emit(SessionEvent.refreshRunTimeNotify, this.runtime);
            this._timer = new Timer(this._currentExercise.executeTime, this.timerOverHandler.bind(this));
        }
    }

    private timerOverHandler = (): void => {
        this.emitter.emit(SessionEvent.timerOverNotify);
        this.emitter.emit(SessionEvent.refreshRunTimeNotify, 0);
    }
}

export enum SessionEvent {
    refreshExerciseNotify = "refreshExercise",
    timerOverNotify = "timerOverNotify",
    refreshRunTimeNotify = "refreshRunTime",
    closeSessionNotify = "exerciseOver"
}
