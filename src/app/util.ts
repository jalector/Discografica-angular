export class Util{

    public  fromJSONColleciton<Type>(collection:any, converter: Function): Type[]{
        let array: Type[] = [];
        
        collection.forEach(element => {
            array = converter(element);
        });

        return array;
    }
}