import moment from 'moment';
import { ISeller } from './Seller';
export interface IItemsInvoice {
  id: number;
  price: number;
  quantity: number;
}

export interface IInvoiceSimple {
  date: string;
  dueDate: string;
  client: number;
  items?: IItemsInvoice[];
  seller?: ISeller | string;
}
export class InvoiceSimple implements IInvoiceSimple {
  date: string;
  dueDate: string;
  client: number;
  items?: IItemsInvoice[];
  seller?: ISeller | string;
  constructor() {
    this.date = moment().format('YYYY-MM-DD');
    this.dueDate = moment().add(30, 'days').format('YYYY-MM-DD');
    this.client = 1;
    this.items = [];
  }
}
