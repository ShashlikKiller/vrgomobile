// Используй в реализации AssetAsync
export interface IDataSetter{ 
    Set<T>(data:T, tag?:string):Promise<void>;
}

export interface IDataGetter{ 
    Get<T>(tag:string):Promise<T>;
}

export interface IDataProvider extends IDataGetter, IDataSetter{}


import * as fs from 'fs';

export class FileIO implements IDataProvider{
    Set<T>(data: T, tag?: string): Promise<void> {
        const filePath = tag;
        return writeFileAsync(filePath, JSON.stringify(data));
    }

    Get<T>(tag: string): Promise<T> {
        const filePath = tag || 'data.json';
        return readFileAsync(filePath)
            .then(data => JSON.parse(data) as T);
    }
}

const readFileAsync = (filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

const writeFileAsync = (filePath?: string, content?: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (filePath != null && content != null){
            fs.writeFile(filePath, content, 'utf-8', (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              });
        }
  });
}