class Patient extends User{

    private _pathology: string
    private _affectedRegion: string[]

    constructor(
        firstName: string, 
        lastName: string, 
        dateOfBirth: string, 
        Email: string, 
        gender: boolean,
        pathology:string,
        affectedRegion: string[]){
        super(
            firstName, 
            lastName, 
            dateOfBirth, 
            Email, 
            gender)
        
            this._affectedRegion= affectedRegion;
            this._pathology = pathology;
    }

    get pathology(){
        return this._pathology
    }

    set pathology(value){
        this._pathology = value
    }

    get affectedRegion(){
        return this._affectedRegion
    }

    set affectedRegion(value){
        this._affectedRegion = value
    }
}