class ValorInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValorInvalidoError';
    }
}

function validarIdade(idade: number): void {
    if (idade < 0) {
        throw new ValorInvalidoError('A idade não pode ser negativa!');
    }
    console.log('Idade válida:', idade);
}

try {
    validarIdade(-5); // Lançará a exceção personalizada
} catch (error) {
    console.error(error.name + ': ' + error.message); // Tratando a exceção personalizada
}