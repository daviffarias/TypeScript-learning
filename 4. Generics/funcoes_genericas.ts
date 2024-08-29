function retornarPrimeiroElemento<T>(array: T[]): T {
    return array[0];
}

// Usando a Função com diferentes Tipos

const primeiroNumero = retornarPrimeiroElemento([10, 20, 30]);
// 10 
const primeiraLetra = retornarPrimeiroElemento(['a', 'b','c']);
// a

console.log(primeiroNumero);
console.log(primeiraLetra);

/*Neste exemplo, a função retornarPrimeiroElemento é genérica e pode 
 funcionar com arrays de qualquer tipo. T representa o tipo genérico que é
inferido automaticamente com base no tipo do array passado como argumento.*/