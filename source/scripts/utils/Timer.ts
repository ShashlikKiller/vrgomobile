export class Timer {
  private _duration: number;
  private _timerId: ReturnType<typeof setTimeout> | null;
  private _startTime: number;
  private _remainingTime: number;
  private _isStopped: boolean;
  private _stopTimerHandler: () => void;

  constructor(seconds: number, stopTimerHandler: () => void) {
      this._duration = seconds * 1000; // Общее время таймера в миллисекундах
      this._timerId = null;
      this._startTime = 0;
      this._remainingTime = this._duration;
      this._isStopped = false;
      this._stopTimerHandler = stopTimerHandler;
  }

  public get runTime(): number {
      if (this._timerId !== null) {
          return new Date().getTime() - this._startTime;
      }
      return this._duration - this._remainingTime;
  }

  start(): void {
        if (this._isStopped || this._timerId !== null) return;
        this._startTime = new Date().getTime();
        this._timerId = setTimeout(() => {
            this.stop();
            console.log("Таймер завершил свою работу");
            this._stopTimerHandler();
        }, this._remainingTime);
  }

  pause(): void {
      if (this._timerId !== null) {
          clearTimeout(this._timerId);
          this._timerId = null;
          this._remainingTime -= new Date().getTime() - this._startTime;
      }
  }

  stop(): void {
      if (this._timerId !== null) {
          clearTimeout(this._timerId);
          this._timerId = null;
      }
      this._remainingTime = 0;
      this._isStopped = true;
  }

  reset(seconds: number): void {
      if (this._timerId !== null) {
          clearTimeout(this._timerId);
          this._timerId = null;
      }
      this._duration = seconds * 1000;
      this._remainingTime = this._duration;
      this._isStopped = false;
  }
}

  // Пример использования
  const exerciseDurationInSeconds = 5; // 5 секунд
  const handler = ():void => {

  }
  const timer = new Timer(exerciseDurationInSeconds, handler);

  console.log("Таймер начал свою работу");
  timer.start();