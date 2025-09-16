import Conta from "./conta.js";

class ContaCorrente extends Conta {
  private taxa: number;

  constructor(_nome: string, _saldo: number, _taxa: number) {
    super(_nome, _saldo);
    this.taxa = _taxa;
  }

  public getTaxa(): number {
    return this.taxa;
  }

  public setTaxa(taxa: number): void {
    this.taxa = taxa;
  }

  public cobrarTaxa(): void {
    const acrescimo = this.getSaldo() * this.taxa;
    this.setSaldo(this.getSaldo() + acrescimo);
  }
}

export default ContaCorrente;