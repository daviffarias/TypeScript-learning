// Definindo a classe Funcionario e criando um método "apresentacao"

class Funcionario{
    constructor(public nome: string, public cargo: string, public salario: number){}

    aprensetacao(): string{
        return `Olá meu nome é ${this.nome} Meu cargo: ${this.cargo} e recebo: R$${this.salario}.`
 
    }

}

// Definindo a subclasse Gerente

class Gerente extends Funcionario{
    constructor(public nome: string, public cargo: string, public salario: number, public departamento: string){
        super(nome,cargo, salario )
    }
    saudacao(): string{
        return `${super.aprensetacao()} Departamento: ${this.departamento} `
    }
}

const trabalhador = new Gerente('Davi','Engenheiro de Dados',20000, 'Tecnologia')

console.log(trabalhador.saudacao())

