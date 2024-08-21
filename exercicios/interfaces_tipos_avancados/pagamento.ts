interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}
const produto: Produto = {
    nome: "Computador",
    preco: 100.0,
    categoria: "caro"
}

type FormaPagamento = 'dinheiro' | 'Cartao' | 'Pix';

const formapagamento: FormaPagamento = 'Pix'




