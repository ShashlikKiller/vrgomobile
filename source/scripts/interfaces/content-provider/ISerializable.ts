interface ISerializable{
    serialize(): string;
    deserialize(data: string): void;
      
}