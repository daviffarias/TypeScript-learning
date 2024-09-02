/*
Uma Promise é um objeto que representa a eventual conclusão (ou falha) 
de uma operação assíncrona. Uma Promise pode estar em três estados:

Pending (pendente): a operação ainda não foi concluída.
Resolved (resolvida): a operação foi concluída com sucesso.
Rejected (rejeitada): a operação falhou.
*/

function buscarDados(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true; // Simulando sucesso ou falha
            if (sucesso) {
                resolve('Dados recuperados com sucesso!');
            } else {
                reject('Falha ao recuperar os dados.');
            }
        }, 2000); // Simulando um atraso de 2 segundos
    });
}

buscarDados()
    .then((mensagem) => console.log(mensagem)) // Lidando com o sucesso
    .catch((erro) => console.error(erro)); // Lidando com o erro