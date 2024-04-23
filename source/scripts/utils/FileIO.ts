// import * as fileSystem from 'fs';
// import { IDataProvider } from './interfaces/content-provider/IDataProvider';

// export class FileIO implements IDataProvider{
//     Set<T>(data: T, tag?: string): Promise<void> {
//       if (tag != null) {
//         return writeFileAsync(tag, JSON.stringify(data));
//       }
//       return Promise.reject();
//     }

//     Get<T>(tag: string): Promise<T> {
//         return readFileAsync(tag)
//             .then(data => JSON.parse(data) as T);
//     }
// }

// const readFileAsync = (filePath: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       fileSystem.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   };

// const writeFileAsync = (filePath?: string, content?: string): Promise<void> => {
//     return new Promise((resolve, reject) => {
//         if (filePath != null && content != null){
//             fileSystem.writeFile(filePath, content, 'utf-8', (err) => {
//                 if (err) {
//                   reject(err);
//                 } else {
//                   resolve();
//                 }
//               });
//         }
//   });
// }