import { Animal } from "./animal";

export class Cavalo extends Animal{
    
    
    constructor(
        nome:string,
        idade:number,
    ){
        super(nome,idade)
        
    }
    som(){
        console.log("RELINCHANDO IGUAL UM CAVALO")
    }
    correr(){
        console.log("CORRENDO IGUAL UM CAVALO")
    }
}