// Array<T> - T[]
function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenarStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor, '');
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicarArgs(1, 2, 3);
const stringConcatenada = concatenarStrings('L', 'U', 'C', 'A', 'S');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(stringConcatenada);
console.log(upper);
