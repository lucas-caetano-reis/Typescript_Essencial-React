let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;

const pessoa = {
  nome: 'Lucas' as const,
  sobrenome: 'Caetano',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'), pessoa, x, y);
