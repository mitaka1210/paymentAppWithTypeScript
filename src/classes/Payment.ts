import { HasFormatter } from './../interfaces/HasFormatter';

//? classes
export class Payment implements HasFormatter {
  constructor(public recipient: string, private details: string, readonly amount: number) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
