export class Timer {
    private _duration: number;
    private _timerId: ReturnType<typeof setTimeout> | null;
    private _startTime: number;
    private _runTime: number;
    private _isStopped: boolean;
  
    constructor(seconds: number) {
      this._duration = seconds * 1000;
      this._timerId = null;
      this._startTime = 0;
      this._runTime = 0;
      this._isStopped = false;
    }

    public get runTime(){
      if (!this._isStopped) this._runTime = this._startTime - new Date().getTime() //времени осталось
      return this._runTime
    }
  
    startTimer(): void {
      this._startTime = new Date().getTime() + this._duration; // время окончания

      this._timerId = setTimeout(() => { // запускаем таймер
        this.stopTimer();
        console.log("Таймер завершил свою работу");
      }, this._duration); // на оставшееся время
    }
    
    pauseTimer():void {
      if (this._timerId) {
        clearTimeout(this._timerId);
        this._timerId = null;
      }  
    }

    stopTimer(): void {
      if (this._timerId) {
        clearTimeout(this._timerId);
        this._timerId = null;
      }
      this._runTime = 0
      this._isStopped = true;
    }
  }
  
  // Пример использования
  const exerciseDurationInSeconds = 5; // 5 секунд
  const timer = new Timer(exerciseDurationInSeconds);
  
  console.log("Таймер начал свою работу");
  timer.startTimer();