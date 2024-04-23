export interface IFactory<T>{
    Create():T;
}
interface IFactoryWithProtocol<T, P>{
    /**
     * 
     * @param protocol Протокол - это класс, который хранит все аргументы метода
     */
    Create(protocol:P):T;
} 