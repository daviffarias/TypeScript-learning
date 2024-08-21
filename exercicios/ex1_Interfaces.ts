interface Produto{
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro'| 'cartão'|'Pix';

const produto: Produto = {
    nome: 'Computador',
    preco: 2000,
    categoria: 'Eletrônico'
}

const formaPagamento: FormaPagamento = "Pix";

function produtoEpagamento (produto: Produto, pagamento: FormaPagamento): string{
        return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço:
                R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.` 
}

console.log(produtoEpagamento(produto, formaPagamento))