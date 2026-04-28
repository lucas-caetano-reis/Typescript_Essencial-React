// Tupla: array de tamanho fixo

const dadosCliente1: readonly [number, string] = [1, 'Lucas']; // imutável
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Caetano'];
const dadosCliente3: [number, string, string?] = [1, 'Lucas'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Lucas',
  'Caetano',
  'Reis',
  'Goulart',
];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Lucas', 'Caetano'];
const array2: ReadonlyArray<string> = ['Lucas', 'Caetano'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
