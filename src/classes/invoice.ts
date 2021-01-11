import { HasFormatter } from './../interfaces/HasFormatter';

//? classes
export class Invoice implements HasFormatter {
  constructor(public client: string, private details: string, readonly amount: number) {
    (this.client = client), (this.details = details), (this.amount = amount);
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
