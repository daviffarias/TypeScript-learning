
//Definição da interface
interface Pessoa {
    nome: string;
    idade: number;
    email?: string; // "?" Propriedade opcional
    readonly cpf: string; // Propriedade somente leitura
}

// Exemplo de utilização
const pessoa: Pessoa = {
    nome: 'João',
    idade: 25,
    cpf: '123.456.789-00'
}

