import { Exercise } from '../Exercise'
import{IBuilder} from './IBuilder'

export interface ISelector<T> {
    Select(array:T[]):T[]
}
export interface ISelectorBuilder<T> extends IBuilder<ISelector<T>>{}

export interface IExerciseSelectorBuilder extends ISelectorBuilder<Exercise>{
    AddPathology(pathology:string):IExerciseSelectorBuilder;
    AddAffectedRegion(affectedRegion:string[]):IExerciseSelectorBuilder;
}
