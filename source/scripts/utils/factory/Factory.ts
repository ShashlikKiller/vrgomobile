import { IFactory } from "@scripts/interfaces/IFactory";
import { Exercise } from "@models/Exercise";
import {IDataGetter} from "@scripts/interfaces/content-provider/IDataProvider";

export class Factory implements IFactory<Exercise>
{
    _dataProvider:IDataGetter;

   constructor(dataGetter: IDataGetter){
        this._dataProvider = dataGetter;
   }
   // Если хотим сделать асинхронные операции,
   // то надо переделать Create в Create(): Promise<T> и await+then
   Create(): Exercise {
        let exercise: Exercise = {} as Exercise;
        Promise.all([
            this._dataProvider.Get<string>("exercise/description")
            .then((description) => {
                // Мы подписались на этот promise
                // и по сути уже имеем значения в description по его выполнению
                // Аналогично с остальными полями
                exercise.description = description!;
            })
            .catch((err) => {
                console.error("Exercise description DataProvider error: ", err);
            }),

            this._dataProvider.Get<string[]>("exercise/exers-steps")
            .then((instruction) => {
                exercise.instruction = instruction!;
            })
            .catch((err) => {
                console.error("Exercise instructions DataProvider error: ", err);
            }),

            this._dataProvider.Get<string>("exercise/imgs-urls")
            .then ((images) => {
                exercise.image = images!;
            })
            .catch((err) => {
                console.error("Exercise images DataProvider error: ", err)
            })
        ]).then(() => {
            return exercise;
        });
        console.error("Something went wrong: factory.ts, can't return an exercise");
        return exercise;
    }
}