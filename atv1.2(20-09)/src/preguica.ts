import { Animal } from "./animal";


export  class Preguica extends Animal{
    
    
    constructor(
        nome:string,
        idade:number,
    ){
        super(nome,idade)
        
    }
    som(){
        console.log("SOM DO PREGUIÇA  CRI CRI CRI CRI")
    }
    subir(){
        console.log("SUBINDO NA ARVORE ")
    }
}