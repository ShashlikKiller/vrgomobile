class Exercise{
    private _description: string;
    private _instructoin: string[];
    private _images: string;
    public exerciseCompleted: () => void;
    constructor(exerciseId: number, description: string, instructoin: string[], images: string ){
        this._description = description;
        this._instructoin = instructoin;
        this._images = images;
        this.exerciseCompleted = () => {};
    }

    get description(){
        return this._description
    }

    get instructoin(){
        return this._instructoin
    }

    get images(){
        return this._images
    }

    /**
     * execute
     */
    public execute() {
        //Здесь происходит логика упражнения 
        // Симуляция выполнения упражнения
        setTimeout(() => {
            console.log(`Exercise ${this._instructoin[0]} completed.`);
            this.exerciseCompleted(); // Вызываем событие завершения упражнения
        }, 2000);
    }

}