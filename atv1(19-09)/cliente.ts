export class Cliente {
nome: string
idade: number
endereco: string
telefone: string

constructor(
    nome: string,
    idade: number,
    endereco: string,
    telefone: string,
){
    this.nome = nome
    this.idade = idade
    this.endereco = endereco
    this.telefone = telefone
}
verNome(){
    console.log(`o seu nome é: ${this.nome}`)
}
verIdade(){
    console.log(`a sua idade é: ${this.idade}`)
}
verEndereco(){
    console.log(`o seu endereço é: ${this.endereco}`)
}
verTelefone(){
    console.log(`o seu telefone é: ${this.telefone}`)
}
}
