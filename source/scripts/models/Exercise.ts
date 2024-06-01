

export class Exercise implements ISerializable{
    
    public static emptyExercise: Exercise = new Exercise(1,1,"", [" "," "]," ");

    public exerciseCompleted: () => void;

    private _description: string;
    private _instruction: string[];
    private _images: string;
    private _execTimeSec: number;

    constructor(exerciseId: number, execTimeSec: number, description: string, instruction: string[], images: string ){
        this._description = description;
        this._instruction = instruction;
        this._images = images;
        this._execTimeSec = execTimeSec;
        this.exerciseCompleted = () => {};
    }

    serialize(): string {
        return JSON.stringify(this);
    }

    deserialize(data: string): void {
        try{
            const { description, instruction, images, execTimeSec } = JSON.parse(data);
            this._description = description;
            this._instruction = instruction;
            this._images = images;
            this._execTimeSec = execTimeSec;
        }
        catch{
            console.debug("Serialization errors Exercise");
        }

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

    get image(){
        return this._images
    }

    set image(value){
        this._images = value
    }

    get executionTime(){
        return this._execTimeSec
    }

    set executionTime(value){
        this._execTimeSec = value
    }


}
