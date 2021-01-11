import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/invoice.js';
//let docOne: HasFormatter;
//let docTwo: HasFormatter;
//docOne = new Invoice('yoshi', 'web work', 250);
//docTwo = new Payment('mario', 'plumbing work', 100);
//let docs: HasFormatter[] = [];
//docs.push(docOne);
//docs.push(docTwo);
//console.log(docs);
//* interfaces + object
//interface isPerson {
//  name: string;
//  age: number;
//  speak(a: string): void;
//  spend(a: number): number;
//}
//const me: isPerson = {
//  name: 'shaun',
//  age: 30,
//  speak(text: string): void {
//    console.log(text);
//  },
//  spend(amount: number): number {
//    console.log(`I spend ${amount}`);
//    return amount;
//  },
//};
//const greetPerson = (person: isPerson) => {
//  console.log(`hello , ${person.name}`);
//};
//! Подаваме като параметър (me) аватоматично на person.name се присвоява 'shaun' в резултат получваме (hello, shaun)
//greetPerson(me);
//*Classes
//? private - видимо само в скоупа на class
//? public = видимо и извън класса
//?  readonly = видимо и извън класс но без да можем да го променяме
//! Choice 1
//class Invoice {
//  public client: string;
//  private details: string;
//  readonly amount: number;
//  constructor(client: string, details: string, amount: number) {
//    (this.client = client), (this.details = details), (this.amount = amount);
//  }
//  format() {
//    return `${this.client} owes $${this.amount} form ${this.details}`;
//  }
//}
//! Choice 2
//class Invoice {
//  //  public client: string;
//  //  private details: string;
//  //  readonly amount: number;
//  constructor(public client: string, private details: string, readonly amount: number) {
//    (this.client = client), (this.details = details), (this.amount = amount);
//  }
//  format() {
//    return `${this.client} owes $${this.amount} form ${this.details}`;
//  }
//}
//const invOne = new Invoice('mario', 'work on the mario website', 250);
//const invTwo = new Invoice('dimitar', 'work on the mario website', 550);
//! Казваме, че е в класса може да се работи само с това което имаме в класса и да се представят като масив.
//let invoice: Invoice[] = [];
//invoice.push(invOne);
//invoice.push(invTwo);
//! Създаваме цикъл който минава през всеки елемент и го печата
//invoice.forEach((inv) => {
//  console.log(inv.client, inv.amount, inv.format());
//});
//const anchor = document.querySelector('a')!;
//! Ако не искаме да пишем тази проверка след като сме селектнали тага слагаме удивителен с което казва ме, че ако истина (TRUE) върни резултата.Така може дирекно да отпечатаме console.log(anchor.href) без да ни дава грешка.
//if (anchor) {
//  console.log(anchor.href);
//}
//console.log(anchor.href);
//const form = document.querySelector('form')!
//* form select and children
const form2 = document.querySelector('.new-item-form');
console.log(form2.children);
//* input select
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//? list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
