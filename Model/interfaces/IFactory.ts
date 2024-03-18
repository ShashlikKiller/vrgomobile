interface IFactory<T>{
    Create():T;
}
interface IFactoryWithProtocol<T, P>{
    Create(protocol:P):T;
} 