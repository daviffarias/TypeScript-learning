export namespace PessoaNamespace{
    export class Pessoa {

        constructor(public nome: string, public idade: number){}

        saudacao(): string {
                return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
        }
    }
}
