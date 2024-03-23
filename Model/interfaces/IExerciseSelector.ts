import { Exercise } from '../Exercise'
import{IBuilder} from './IBuilder'

export interface ISelector<T> {
    Select(array:T[], pathology: string, affectedRegions: string[]):T[]
}
export interface ISelectorBuilder<T> extends IBuilder<ISelector<T>>{}

export interface IExirciseSelctorBuilder extends ISelectorBuilder<Exercise>{
    AddPathology(pathology:string):IExirciseSelctorBuilder;
    AddAffectedRegion(affectedRegion:string[]):IExirciseSelctorBuilder;
}
