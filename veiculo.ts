class Veiculo{
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirInfo(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}
class Carro extends Veiculo{
    tipoCombustivel: string;

    constructor(marca: string, modelo: string, tipoCombustivel: string){
        super(marca, modelo);
        this.tipoCombustivel = tipoCombustivel;
    }
    exibirInfoCompleta(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo de Combustível: ${this.tipoCombustivel}`);
        }      
}

const meuCarro = new Carro("Toyota", "Corolla", "Flex");
meuCarro.exibirInfoCompleta();

