function logarClasse(construtor: Function) {
    console.log(`Classe decorada: ${construtor.name}`);
}

@logarClasse
class Pessoa {
    constructor(public nome: string) {}
}

// Saída: Classe decorada: Pessoa

/*
Neste exemplo, o decorator logarClasse é aplicado à classe Pessoa. 
Sempre que a classe for definida, o decorator será chamado, 
imprimindo o nome da classe.
*/