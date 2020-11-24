export interface ITestForProps {
    text:string,
    number: number,
    someArray: string[],
    someArrayNumber: number[],
    someArrayObject: ISomeArrayObject[],
    someArrayObjectWithArray: ISomeArrayObjectWithArray[],
    someArrayObjectWithObject: ISomeArrayObjectWithObject[]
};

export interface ISomeArrayObject {
    name:string,
    age:number,
}
export interface ISomeArrayObjectWithArray {
    name:string,
    age:number,
    friends: string[]
}

export interface ISomeArrayObjectWithObject {
    name:string,
    age:number,
    favoritePets: IFavoritePets
}

export interface IFavoritePets {
    name: string
}