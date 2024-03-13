class Exercise{
    private _description: string;
    private _instructoin: string[];
    private _images: string;

    constructor(exerciseId: number, description: string, instructoin: string[], images: string ){
        this._description = description;
        this._instructoin = instructoin;
        this._images = images;
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

}