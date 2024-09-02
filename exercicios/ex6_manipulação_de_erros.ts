class EmailInvalidoError extends Error {
    constructor(menssage: string){
        super(menssage);
        this.name = 'EmailInvalidoError'; // Customizar nome do erro.
    }
}

function verificarEmail(email: string): void {

    if (!email.includes('@')){

        throw new EmailInvalidoError('Email inválido: o email deve conter o carctere "@" ');
    }

    console.log('Email válido!');
}

try {
    verificarEmail('usuario.com');  
} catch (error) {
    // Captura o erro e imprime a mensagem
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  // Deve imprimir "Email inválido"
    }
}