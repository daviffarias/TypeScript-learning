interface Produtou {
    nome: string;
    preco: number;
    emEstoque: boolean;
}

function vericarDisponibilidade(produto: Produtou): string {
    if (produto.emEstoque) {
        return `O produto ${produto.nome} está disponível por R$${produto.preco}. `;
    } else {
        return `O produto ${produto.nome} não está disponível no momento.`;
    }
}

const produto1: Produtou = {
    nome: "Cadeira",
    preco: 150.00,
    emEstoque: true
};

console.log(vericarDisponibilidade(produto1));
