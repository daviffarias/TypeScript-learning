// Definição de tipos condicionais
type Cores = 'vermelho' | 'azul';
type Tamanho = 1 | 2 | 3;
type DescricaoCor<T> = T extends 'vermelho' ? 'Cor Quente': 'Cor Fria';

// Exeplo de Utilização

const cor: Cores = 'vermelho';
const tamanho: Tamanho = 2;

const descricaoCorVermelho: DescricaoCor<'vermelho'> = 'Cor Quente'; // inferido como 'Cor quente'

/* DescricaoCor é um tipo condicional que verifica se T é 'vermelho' . Se for, o
tipo será 'Cor Quente' , senão será 'Cor Fria' . Isso adiciona lógica aos tipos e permite
maior flexibilidade.
*/