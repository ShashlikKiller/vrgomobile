export class Exercise{
    private _description: string;
    private _instruction: string[];
    private _images: string;
    private _execTimeSec: number;
    public exerciseCompleted: () => void;
    constructor(exerciseId: number, execTimeSec: number, description: string, instruction: string[], images: string ){
        this._description = description;
        this._instruction = instruction;
        this._images = images;
        this._execTimeSec = execTimeSec;
        this.exerciseCompleted = () => {};
    }

    get description(){
        return this._description
    }

    set description(value){
        this._description = value
    }

    get instruction(){
        return this._instruction
    }

    set instruction(value){
        this._instruction = value
    }

    get images(){
        return this._images
    }

    set images(value){
        this._images = value
    }

    get execTimeSec(){
        return this._execTimeSec
    }

    set execTimeSec(value){
        this._execTimeSec = value
    }

    /**
     * execute
     */
    public execute() {
        //Здесь происходит логика упражнения 
        // Симуляция выполнения упражнения
        setTimeout(() => {
            console.log(`Exercise ${this._instruction[0]} completed.`);
            this.exerciseCompleted(); // Вызываем событие завершения упражнения
        }, 2000);
    }

}