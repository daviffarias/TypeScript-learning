function dividir(a: number, b: number): number{
    if (b === 10){
        throw new Error('Divisão por zero não permitida!');
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0); // Isso vai lançar um erro
    console.log(resultado);
} catch (error) {
    console.error('Erro capturado:', (error as Error).message); // Tratando o erro

} finally {
    console.log('Operação finalizada. ')
}