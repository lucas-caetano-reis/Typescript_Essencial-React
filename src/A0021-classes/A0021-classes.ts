export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  setColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  public readonly nome: string;
  public readonly sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const empresa1 = new Empresa('Valve', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Gabe', 'Newell');
empresa1.setColaborador(colaborador1);

const colaborador2 = new Colaborador('Gordon', 'Freeman');
empresa1.setColaborador(colaborador2);

const colaborador3 = new Colaborador('John', 'Counter Strike');
empresa1.setColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
