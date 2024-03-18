import { Provider } from "react";
// Используй в реализации AssetAsync
export interface IDataSetter{ 
    Set<T>(data:T, tag?:string):Provider<void>;
}

export interface IDataGetter{ 
    Get<T>(tag:string):Provider<T>;
}

export interface IDataProvider extends IDataGetter, IDataSetter{}