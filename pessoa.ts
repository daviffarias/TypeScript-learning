class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    informacoes(): void{
        console.log(`Dados pessoa. Nome: ${this.nome} Idade: ${this.idade}`)
    }
}

class Aluno extends Pessoa{
    curso: string;

    constructor(nome: string, idade: number, curso: string){
        super(nome, idade);
        this.curso = curso;
    }
    informacoesAluno(): void {
        console.log(`Dados do aluno: Nome: ${this.nome} Idade: ${this.idade} Curso: ${this.curso}`)
    }

}

const pessoaAluno = new Aluno("Davi", 20, "computação");
pessoaAluno.informacoesAluno();