export interface Product {
   
    title : string;
    price: number;
    
    categorie: string;
    imageUrl: string;
}
export interface pro {
   
    title : string;
    price: number;
    key:string;
    categorie: string;
    imageUrl: string;
}
export class Prodt {
    name !: string;
    quantity !: number;

    constructor() {}
}