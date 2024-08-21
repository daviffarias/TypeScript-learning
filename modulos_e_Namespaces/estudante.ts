import { PessoaNamespace } from "./pessoa"; // ou caminho de diretórioas que estive salvo o namespace

export namespace EstudanteNamespace {
    export class Estudante extends PessoaNamespace.Pessoa{
        constructor(nome: string, idade: number, public curso: string){
            super(nome, idade);
        }
        apresentacao(): string {
            return `${this.saudacao()} Estudo ${this.curso}.`
        }
    }
}