export class PacienteCadastro{
    nome: string;
    matricula:number;
    sala:number;
    idade:number;
    
    
    constructor(
        nome:string,
        matricula:number,
        sala:number,
        idade:number,
    ){
        this.nome = nome;
        this.matricula = matricula;
        this.sala = sala;
        this.idade = idade;
    
    }
    verNome(){
        console.log(`seu nome é: ${this.nome}`)
    }
    verMatricula(){
        console.log(`sua matricula é: ${this.matricula}`)
    }
    verSala(){
        console.log(`sua sala é: ${this.sala}`)
    }
    verIdade(){
        console.log(`sua idade é: ${this.idade}`)
    }
    
    }