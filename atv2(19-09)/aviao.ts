export class Aviao{

    empresa:string;
    setor: string;
    cor: string;
    classe:string;

    constructor( 
        empresa: string,
        setor: string,
        cor: string,
        classe: string,
    ){
        this.empresa = empresa;
        this.setor = setor;
        this.cor = cor;
        this.classe = classe;
    }
    verEmpresa(){
        console.log(`Sua empresa  é: ${this.empresa}`)
    }
    verSetor(){
        console.log(`Seu setor de operação é: ${this.setor}`)
    }
    verCor(){
        console.log(`A Cor do avião é: ${this.cor}`)
    }
    verClasse(){
        console.log(`Sua classe é: ${this.classe}`)
    }

}