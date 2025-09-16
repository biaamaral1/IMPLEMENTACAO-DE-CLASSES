import Conta from "./conta.js";

class ContaPoupanca extends Conta {
  private juros: number;

  constructor(_nome: string, _saldo: number, _juros: number) {
    super(_nome, _saldo);
    this.juros = _juros;
  }

  public getJuros(): number {
    return this.juros;
  }

  public setJuros(juros: number): void {
    this.juros = juros;
  }

  public renderJuros(): void {
    const rendimento = this.getSaldo() * this.juros;
    this.setSaldo(this.getSaldo() + rendimento);
  }
}

export default ContaPoupanca;