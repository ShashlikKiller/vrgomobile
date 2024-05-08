// Используй в реализации AssetAsync
export interface IDataSetter{ 
    Set<T>(data:T, tag:string):Promise<void>;
}

export interface IDataGetter{ 
    Get<T>(tag:string):Promise<T | null>;
    GetSerializable(tag:string):Promise<string | null>;
}

export interface IDataProvider extends IDataGetter, IDataSetter{}

export enum Path{
    choseBodyPart = "ChoseBodyPart",
    pathology = "pathology",
}