// Definição de interseção
type Jogador = {
    nome: string;
    idade: number;
    habilidades: string[];
};

type Gamer = {
    id: number;
    jogos: string[]
};

type JogadorGamer = Jogador & Gamer

// Exemplo de utilização

const jogadorGamer: JogadorGamer = {
    nome: 'Davi',
    idade: 20,
    habilidades: ['Lógica','Programação'],
    id: 123,
    jogos: ['Dead Rising 3','Dying Light']
}

/*Explicação: JogadorGamer é uma interseção entre Jogador e Gamer , o que significa que
esse tipo possui todas as propriedades de ambos. No exemplo, o objeto jogadorGamer possui
as propriedades nome , idade , habilidades , id , e jogos .*/