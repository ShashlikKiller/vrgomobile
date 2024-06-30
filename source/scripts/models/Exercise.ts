import { ExerciseType } from "@scripts/descriptionOfExercises/allExercises";


export class Exercise implements ISerializable{
    
    public static emptyExercise: Exercise = new Exercise(0,"", [],"");

    public exerciseCompleted: () => void;

    private _pathology: string = "";
    private _bodyPart: string = "";

    private _exerciseType: ExerciseType;
    private _description: string;
    private _instruction: string[];
    private _images: string;
    private _executeTime: number;
    private _countOfRepeat: number;

    constructor(
        executeTime: number, 
        description: string, 
        instruction: string[], 
        images: string, 
        exerciseType: ExerciseType = ExerciseType.COUNT,
        countOfRepeat: number = 2){

        this._description = description;
        this._instruction = instruction;
        this._images = images;
        this._executeTime = executeTime;
        this._exerciseType = exerciseType
        this._countOfRepeat = countOfRepeat;

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
            this._executeTime = execTimeSec;
        }
        catch{
            console.debug("Serialization errors Exercise");
        }

    }

    get pathology() {
        return this._pathology
    }
    get bodyPart() {
        return this._bodyPart
    }
    set pathology(value) {
        this._pathology = value
    }
    set bodyPart(value) {
        this._bodyPart = value
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

    get executeTime(){
        return this._executeTime
    }

    set executeTime(value){
        this._executeTime = value
    }

    get exerciseType(){
        return this._exerciseType;
    }
    get countOfReapeat(){
        return this._countOfRepeat;
    }

}
