export class Util{

    public  fromJSONColleciton<Type>(collection:any, converter: (json:any) => Type): Type[]{
        let array: Type[] = [];
        
        collection.forEach(element => {
            array.push(converter(element));
        });

        return array;
    }
}