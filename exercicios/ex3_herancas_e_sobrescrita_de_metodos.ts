class ContaBancaria{
    constructor(public titular: string, public saldo: number ){}

    exibirSaldo(): string {
        return `Titular: ${this.titular} seu saldo é de: R$${this.saldo}.`
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(public titular: string, public saldo: number, public limiteCredito: number ){
        super(titular, saldo)        
    }
    exibirSaldo(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
}

const ContaCorrenteExemplo = new ContaCorrente('Davi',50000, 100000);
console.log(ContaCorrenteExemplo.exibirSaldo());

