class Caixa<T>{
    conteudo: T;

    constructor(conteudo: T){
        this.conteudo = conteudo;
    }

    pegarConteudo(): T {
        return this.conteudo;
    }
}

const caixaDeNumero = new Caixa<number>(123);
console.log(caixaDeNumero.pegarConteudo());  // 123

const caixaDeTexto = new Caixa<string>("Olá, mundo!");
console.log(caixaDeTexto.pegarConteudo());  // Olá, mundo!


/*Aqui, a classe Caixa utiliza o tipo genérico T,
 o que permite que ela armazene e retorne valores de qualquer tipo.
 Quando criamos uma instância de Caixa, 
especificamos qual tipo ela irá armazenar (número, string, etc.). */