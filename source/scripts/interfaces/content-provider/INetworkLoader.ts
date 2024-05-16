import { Provider } from "react";
/**
 * @template T Нужно указать тип перечисления
 */
export interface INetworkLoader<T extends number>{
    /**
     * 
     * @param type Тип объекта 
     * @param tag Тэг - уникальный значение, по которому можно распознать объект
     * @returns Path - путь до объекта
     */
    Load(type:T, tag:string):Provider<string>;
}