//1. Crie uma classe para representar uma pessoa, com os atributos privados 
//de nome, data de nascimento e altura. Crie os métodos necessários para 
//imprimir todos dados de uma pessoa, um para calcular a idade da pessoa.

    class Pessoa{
    private nome:string;
    private dnasc:string;
    private altura:number;
    private ano: number;

    constructor(
        nome:string,
        dnasc:string,
        altura:number,
        ano:number

    ){
        this.nome = nome
        this.dnasc = dnasc
        this.altura = altura
        this.ano = ano
        
    }
    verIdade(){
        alert("digite sua idade")
    }
} 


