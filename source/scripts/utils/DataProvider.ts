import AsyncStorage from '@react-native-async-storage/async-storage';
import { IDataProvider } from '@scripts/interfaces/content-provider/IDataProvider';
export class DataProvider implements IDataProvider{

    private static _instance: IDataProvider;
    private constructor(){}

    private dictionary:Map<string, string> = new  Map<string, string>(); 

    static GetInstance():IDataProvider{
        if(this._instance == null){
            this._instance = new DataProvider()
        }
        return this._instance;
    }

    GetSerializable(tag: string): Promise<string | null> {
        return new Promise((resolve, reject) => {
            var data = this.dictionary.get(tag); 

            if(data != undefined){
                resolve(data);
            }   
            else{
                AsyncStorage.getItem(tag)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    console.error("In AsyncStorage an error occurred(DataProvider:Get)", error);
                    reject(error);
                });
            }
        });
    }

    async Get<T>(tag: string): Promise<T | null> {
        return new Promise((resolve, reject) => {

            try{
                var data = this.dictionary.get(tag); 

                if(data != undefined){
                    var obj: T | null =  data ? JSON.parse(data) : null;
                    resolve(obj);
                }   
                
                AsyncStorage.getItem(tag)
                    .then(result => {
                        if(result === null){
                            reject(new Error("result is null"))
                        }
                        this.dictionary.set(tag, result!);
                        obj = result ? JSON.parse(result) : null;
                        if (obj === null) {
                            reject(new Error("Object is not deserializable"));
                        } else {
                            resolve(obj);

                        }
                    })
                    .catch(error => {
                        console.error("In AsyncStorage an error occurred(DataProvider:Get)", error);
                        reject(error);
                    });
            }
            catch(error){
                console.error("In AsyncStorage an error occurred(DataProvider:Get)", error);
                reject(error); 
            }
        });
    }
    

    async Set<T>(data: T, tag: string): Promise<void> {
        return new Promise<void>((resolve, reject)=>{

            var cashedData = this.dictionary.get(tag);
            
            if(data == JSON.parse(cashedData ? cashedData : "null")){
                resolve();
            }
            else{

                var jsonData = JSON.stringify(data);

                AsyncStorage.setItem(tag, jsonData)
                .then(()=>{
                    this.dictionary.set(tag, jsonData);                    
                    resolve();
                })
                .catch((error)=>{
                    console.error("In AsyncStorage an error occurred(DataProvider:Set),", error)
                    reject(error);
                })
            }
        })
   

        return 
    } 
}
 