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
                            console.debug(obj)

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
   

// export async function get<T>(key: string): Promise<T | null> {
//     try {
//       const data = await AsyncStorage.getItem(key);
//       return data ? JSON.parse(data) as T : null;
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   }
  
//   export async function setData(key: string, value: any): Promise<void> {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   export async function getAllData(): Promise<IUserData | null> {
//     return await get<IUserData>('patient');
//   }
  
//   export async function createData(): Promise<void> {
//     const value: IUserData = {
//       pathology: '',
//       bodyPart: []
//     };
//     await setData('patient', value);
//   }
  
//   export async function mergePathology(param: string): Promise<void> {
//     const value = {
//       pathology: param
//     };
//     await AsyncStorage.mergeItem('patient', JSON.stringify(value));
//   }
  
//   export async function mergeBodyPart(param: string[]): Promise<void> {
//     const value = {
//       bodyPart: param
//     };
//     await AsyncStorage.mergeItem('patient', JSON.stringify(value));
//   }
  
//   export async function removeData(key: string): Promise<void> {
//     try {
//       await AsyncStorage.removeItem(key);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   export async function createShowOrNot(): Promise<void> {
//     const value: IShowOrNot = {
//       showOrNot: false
//     };
//     await setData('showOrNot', value);
//   }
  
//   export async function mergeShowOrNot(param: boolean): Promise<void> {
//     const value = {
//       showOrNot: param
//     };
//     await AsyncStorage.mergeItem('showOrNot', JSON.stringify(value));
//   }