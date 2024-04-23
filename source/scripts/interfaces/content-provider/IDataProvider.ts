// Используй в реализации AssetAsync
export interface IDataSetter{ 
    Set<T>(data:T, tag?:string):Promise<void>;
}

export interface IDataGetter{ 
    Get<T>(tag:string):Promise<T>;
}

export interface IDataProvider extends IDataGetter, IDataSetter{}