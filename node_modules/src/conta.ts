class Conta {
    
  private nome: string;
  private saldo: number;

  constructor(_nome: string, _saldo: number) {
    this.nome = _nome;
    this.saldo = _saldo;
  }

  public getNome(): string {
    return this.nome
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }

  public sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Você não tem saldo suficiente");
    } else {
      this.saldo -= valor;
    }
  }

  public exibirSaldo(): void {
    console.log(`O saldo do cliente ${this.nome} é de R$ ${this.saldo.toFixed(2)}`);
  }
}

export default Conta;