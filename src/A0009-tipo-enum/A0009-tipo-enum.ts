export const Cores = {
  VERMELHO: 10,
  AZUL: 20,
  AMARELO: 30,
  ROXO: 'ROXO',
} as const;

export type Cores = (typeof Cores)[keyof typeof Cores];

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores.ROXO);
