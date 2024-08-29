interface Par<T, U>{
    primeiro: T;
    segundo: U;

}

const numeroETexto: Par<number, string> = { primeiro: 42, segundo: "resposta" };
const textoEBooleano: Par<string, boolean> = { primeiro: "verdade", segundo: true };

console.log(numeroETexto)
console.log(textoEBooleano)

/*
A interface Par pode conter dois tipos diferentes (T e U), o que permite que 
você crie pares de valores com tipos distintos, como um número e uma string 
ou uma string e um booleano.
 */