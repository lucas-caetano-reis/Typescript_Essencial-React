interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

//type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  public nome: string;
  public sobrenome: string;
  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nome: 'Lucas',
  sobrenome: 'Caetano',

  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

const pessoa = new Pessoa('Lucas', 'Caetano');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
