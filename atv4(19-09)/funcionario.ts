export class CadastroFuncionario{
nome: string;
matricula:number;
setor:string;
cargo:string;

constructor(
    nome:string,
    matricula:number,
    setor:string,
    cargo:string,
){
    this.nome = nome;
    this.matricula = matricula;
    this.setor = setor;
    this.cargo = cargo;

}
verNome(){
    console.log(`seu nome é: ${this.nome}`)
}
verMatricula(){
    console.log(`sua matricula é: ${this.matricula}`)
}
verSetor(){
    console.log(`seu setor é: ${this.setor}`)
}
verCargo(){
    console.log(`seu cargo é: ${this.cargo}`)
}

}