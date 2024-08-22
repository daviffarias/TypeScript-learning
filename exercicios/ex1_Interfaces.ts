// Definição da interface Produto.

interface Produto{
    nome: string;
    preco: number;
    categoria: string;
}

// Definição do tipo de união FormaPagamento
type FormaPagamento = 'dinheiro'| 'cartão'|'Pix';

// Definindo o Produto
const produto: Produto = {
    nome: 'Computador',
    preco: 2000,
    categoria: 'Eletrônico'
}

const formaPagamento: FormaPagamento = "Pix";

// Função que recebe um Produto e uma FormaPagamento
function produtoEpagamento (produto: Produto, pagamento: FormaPagamento): string{
        return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço:
                R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.` 
}

console.log(produtoEpagamento(produto, formaPagamento))