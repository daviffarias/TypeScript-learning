async function buscarDados1(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;
            if (sucesso) {
                resolve('Dados recuperados com sucesso!');
            } else {
                reject('Falha ao recuperar os dados.');
            }
        }, 2000);
    });
}

async function exibirDados() {
    try {
        const dados = await buscarDados(); // Espera a Promise ser resolvida
        console.log(dados);
    } catch (erro) {
        console.error('Erro capturado:', erro); // Captura o erro, se houver
    }
}

exibirDados();