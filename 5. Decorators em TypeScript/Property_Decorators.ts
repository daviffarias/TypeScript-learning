function propriedadeNaoNegativa(target: any, propertyKey: string) {
    let valor: number;

    const getter = () => valor;
    const setter = (novoValor: number) => {
        if (novoValor < 0) {
            throw new Error('O valor não pode ser negativo');
        }
        valor = novoValor;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}

class ContaBancaria {
    @propriedadeNaoNegativa
    saldo: number = 0;
}

const conta = new ContaBancaria();
conta.saldo = 100;  // Funciona normalmente
conta.saldo = -50;  // Gera erro: O valor não pode ser negativo