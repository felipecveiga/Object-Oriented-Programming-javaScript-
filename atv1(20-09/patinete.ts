export class Patinete{
    cor: string;
    marca:string;
    rodas:number;
    dono: string;

    constructor(
        cor: string,
        marca:string,
        rodas:number,
        dono:string,
    ){
        this.cor = cor;
        this.marca = marca;
        this.rodas = rodas;
        this.dono = dono;

    }
    verCor(){
        console.log(`a cor do patinete é: ${this.cor}`)
    }
    verMarca(){
        console.log(`Sua Marca é: ${this.marca}`)
    }
    verRodas(){
        console.log(`a quantidade de rodas é: ${this.rodas}`)
    }
    verDono(){
        console.log(`o dono do patinete é: ${this.dono}`)
    }
}