import {User} from './User'

class Patient extends User{

    private _pathology: string
    private _affectedRegion: string[]

    constructor(
        firstName: string, 
        lastName: string, 
        dateOfBirth: string, 
        Email: string, 
        gender: boolean,
        affectedRegion: string[],
        pathology:string)
    {
        super(firstName, lastName, dateOfBirth, Email, gender);

        this._pathology = pathology;
        this._affectedRegion = affectedRegion;

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