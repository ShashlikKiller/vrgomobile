export class User{
    private _firstName: string;
    private _lastName: string;
    private _dateOfBirth: string;//(?)
    private _email: string;
    private _gender: boolean;

    constructor(firstName: string, lastName: string, dateOfBirth: string, email: string, gender: boolean){
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._gender = gender;
    }

    get gender(){
        return this._gender
    }

    set gender(value){
        this._gender = value
    }

    get firstName(){
        return this._firstName
    }
    set firstName(value){
        this._firstName = value
    }

    get lastName(){
        return this._lastName
    }

    set lastName(value){
        this._lastName = value
    }

    get dateOfBirth(){
        return this._dateOfBirth
    }

    set dateOfBirth(value){
        this._dateOfBirth = value
    }

    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }

}