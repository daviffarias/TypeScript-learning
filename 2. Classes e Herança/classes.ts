// Definição de classe simples

class Pessoa {
    // O construtor inicializa as propriedades da classe
    constructor(public nome: string, public idade: number){}


    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
    
}

// Instaciando um objeto da classe Pessoa
const pessoa = new Pessoa('Davi', 20);
console.log(pessoa.saudacao());

/* 
Explicação: A classe Pessoa define duas propriedades: nome e idade . O construtor
( constructor ) é usado para inicializar essas propriedades ao criar uma nova instância da
classe. O método saudacao() retorna uma mensagem personalizada baseada nas
propriedades do objeto.
*/