export class ContaBanco{
    nome: string;
    conta:string;
    agencia:number;
    saldo: number;

    constructor(
        nome:string,
        conta:string,
        agencia:number,
        saldo:number,
    ){
        this.nome = nome;
        this.conta = conta;
        this.agencia = agencia;
        this.saldo = saldo;

    }
    verNome(){
        console.log(`Seu nome é: ${this.nome}`)
    }
    verConta(){
        console.log(`Sua conta é: ${this.conta}`)
    }
    verAgencia(){
        console.log(`Sua agência é: ${this.agencia}`)
    }
    verSaldo(){
        console.log(`Seu saldo é: ${this.saldo}`)
    }
}