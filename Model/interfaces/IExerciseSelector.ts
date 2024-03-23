import { Exercise } from '../Exercise'
import{IBuilder} from './IBuilder'

export interface ISelector<T> {
    Select(array:T[]):T[]
}
export interface ISelectorBuilder<T> extends IBuilder<ISelector<T>>{}

export interface IExerciseSelctorBuilder extends ISelectorBuilder<Exercise>{
    AddPathology(pathology:string):IExerciseSelctorBuilder;
    AddAffectedRegion(affectedRegion:string[]):IExerciseSelctorBuilder;
}
