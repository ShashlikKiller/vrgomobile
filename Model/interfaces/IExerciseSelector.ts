import{IBuilder} from './IBuilder'

export interface ISelector<T> {
    Select(array:T[]):T[]
}
export interface ISelectorBuilder<T> extends IBuilder<ISelector<T>>{}
