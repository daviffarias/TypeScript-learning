// Definição de classe base (superclasse)

class Pessoa1{
    constructor(public nome: string, public idade: number) {}

    saudacao(): string {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos. `
    }
}

// Definição de subclasse (herança)

class Estudante extends Pessoa1 {
    constructor(public nome: string, public idade: number, public curso: string){
        super(nome, idade); // Chama o construtor da superclasse 
    }

    // Método adicional na subclasse
    apresentacao(): string {
        return `${super.saudacao()} Estudo ${this.curso}.`;
    }
}

// Instaciando utilizando a subclasse
const estudante = new Estudante('Davi', 20, 'Engenharia da computação')
console.log(estudante.apresentacao())

/* Explicação: A classe Estudante herda de Pessoa usando a palavra-chave extends . O
método apresentacao() chama o método saudacao() da superclasse através da palavrachave super . O construtor da subclasse também utiliza super() para inicializar as
propriedades da classe pai antes de adicionar a nova propriedade curso .
*/