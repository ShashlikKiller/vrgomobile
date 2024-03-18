export class Timer {
    private duration: number;
    private timerId: ReturnType<typeof setTimeout> | null;
  
    constructor(seconds: number) {
      this.duration = seconds * 1000;
      this.timerId = null;
    }
  
    startTimer(): void {
      this.timerId = setTimeout(() => {
        this.stopTimer();
        console.log("Таймер завершил свою работу");
      }, this.duration);
    }
  
    stopTimer(): void {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
    }
  }
  
  // Пример использования
  const exerciseDurationInSeconds = 5; // 5 секунд
  const timer = new Timer(exerciseDurationInSeconds);
  
  console.log("Таймер начал свою работу");
  timer.startTimer();