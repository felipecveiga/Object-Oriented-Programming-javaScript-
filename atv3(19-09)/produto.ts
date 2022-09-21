export class ProdutoEletronico{
nome: string;
marca: string;
preco: number;
cor: string;

constructor(
    nome:string,
    marca:string,
    preco:number,
    cor:string,
){
    this.nome = nome
    this.marca = marca
    this.preco = preco
    this.cor = cor
}
verNome(){
    console.log(`O Nome do produto : ${this.nome}`)
}
verMarca(){
    console.log(`A marca é: ${this.marca}`)
}
verPreco(){
    console.log(`O Preço é: ${this.preco}`)
}
verCor(){
    console.log(`A cor do seu produto é: ${this.cor}`)
}

}