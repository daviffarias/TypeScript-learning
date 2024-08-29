class Funcionario extends Pessoa1 {
    private salario: number; // Propriedade privada, não acessível fora da classe

    constructor(nome: string, idade: number, salario: number){
        super(nome, idade);
        this.salario = salario
    }

    // Método público para acessar a propriedade privada
    getSalario(): number {
        return this.salario;
    }

}

const funcionario = new Funcionario('Carlos', 40, 5000);
console.log(funcionario.getSalario());


/*
Explicação: A propriedade salario é privada, o que significa que só pode ser acessada ou
modificada dentro da classe Funcionario . O método getSalario() é público e permite
acessar essa propriedade de fora da classe.
 */