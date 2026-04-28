export function criaErro(): never { // Essa função NUNCA retorna nada
  throw new Error('Erro qualquer'); // Usada para lançar erros ou travar a aplicação em um loop infinito
}

criaErro();

// Module mode
export default 1;
