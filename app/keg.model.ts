export class Keg {
  public empty: boolean = false;
  public volume: number = 124;
  constructor(public name: string, public percentage: number, public type: string, public price: number) { }
}
