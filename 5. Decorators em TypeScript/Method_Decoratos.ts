
function logarMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Método chamado: ${propertyKey}`);
        return metodoOriginal.apply(this, args);
    };
}

class Carro {
    @logarMetodo
    dirigir() {
        console.log("Dirigindo o carro...");
    }
}

const carro = new Carro();
carro.dirigir();
// Saída:
// Método chamado: dirigir
// Dirigindo o carro...