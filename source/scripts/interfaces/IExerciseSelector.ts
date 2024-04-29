import { Exercise } from '@models/Exercise'
import{IBuilder} from '@scripts/interfaces/IBuilder'

export interface ISelector<T> {
    Select(array:T[]):T[]
}
export interface ISelectorBuilder<T> extends IBuilder<ISelector<T>>{}

export interface IExerciseSelectorBuilder extends ISelectorBuilder<Exercise>{
    AddPathology(pathology:string):IExerciseSelectorBuilder;
    AddAffectedRegion(affectedRegion:string[]):IExerciseSelectorBuilder;
}
