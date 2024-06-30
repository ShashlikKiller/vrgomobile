export class Timer {
  private _duration: number;
  private _timerId: ReturnType<typeof setTimeout> | null;
  private _startTime: number;
  private _remainingTime: number;
  private _isRunning: boolean;
  private _timerOverHandler: () => void;

  constructor(seconds: number, timerOverHandler: () => void) {
    this._duration = seconds * 1000;
    this._timerId = null;
    this._startTime = 0;
    this._remainingTime = this._duration;
    this._isRunning = false;
    this._timerOverHandler = timerOverHandler;
  }

  public get runTime(): number {
    if (this._isRunning) {
      return Math.max(0, this._startTime + this._remainingTime - new Date().getTime());
    }
    return this._remainingTime;
  }

  start(): void {
    if (this._isRunning) {
      return;
    }
    this._isRunning = true;
    this._startTime = new Date().getTime();

    this._timerId = setTimeout(() => {
      this.stop();
      console.log("Таймер завершил свою работу");
    }, this._remainingTime);
  }

  pause(): void {
    if (this._timerId) {
      clearTimeout(this._timerId);
      this._timerId = null;
      this._remainingTime -= new Date().getTime() - this._startTime;
      this._isRunning = false;
    }
  }

  stop(): void {
    if (this._timerId) {
      clearTimeout(this._timerId);
      this._timerId = null;
    }
    this._remainingTime = this._duration;
    this._isRunning = false;
    this._timerOverHandler();
  }
}


