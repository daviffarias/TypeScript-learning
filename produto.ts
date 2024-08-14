interface Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function infoLivro(livro: Livro): string {
    return `Titulo do livro: ${livro.titulo}, Autor: ${livro.autor} 
    e ano de publicação: ${livro.anoPublicacao}.`;
}

const livro1: Livro = {
    titulo: "Principios do Estrategista",
    autor: "Felipe Miranda",
    anoPublicacao: 2020
};

console.log(infoLivro(livro1));