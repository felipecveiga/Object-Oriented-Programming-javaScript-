import { Animal } from "./animal";

export class Cachorro extends Animal{
    
    
    constructor(
        nome:string,
        idade:number,
    ){
        super(nome,idade)
    }
som(){
    console.log("AU AU AU AU AU AU")
}
correr(){
    console.log("correndo igual um condenado")
}
}