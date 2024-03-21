import { IFactory } from "../interfaces/IFactory";
import { Exercise } from "../Exercise";
import {IDataGetter} from "../interfaces/content-provider/IDataProvider";

export class Factory implements IFactory<Exercise>
{
    _dataProvider:IDataGetter;

   constructor(dataGetter: IDataGetter){
        this._dataProvider = dataGetter;
   }
   // Если хотим сделать асинхронные операции,
   // то надо переделать Create в Create(): Promise<T> и await+then
   Create(): Exercise {

    let _exercise: Exercise = {} as Exercise;
    Promise.all([
    this._dataProvider.Get<string>("exercise/description")
    .then((_description) => {
        // Мы подписались на этот promise
        // и по сути уже имеем значения в description по его выполнению
        // Аналогично с остальными полями
        _exercise.description = _description;
    })
    .catch((err) => {
        console.error("Exercise description DataProvider error: ", err);
    }),

    this._dataProvider.Get<string[]>("exercise/exers-steps")
    .then((_instruction) => {
        _exercise.instruction = _instruction;
    })
    .catch((err) => {
        console.error("Exercise instructions DataProvider error: ", err);
    }),

    this._dataProvider.Get<string>("exercise/imgs-urls")
    .then ((_images) => {
        _exercise.images = _images;
    })
    .catch((err) => {
        console.error("Exercise images DataProvider error: ", err)
    })
]).then(() => {
    return _exercise;
});
console.error("Something went wrong: factory.ts, can't return an exercise");
return _exercise;
}
}