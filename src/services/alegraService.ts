import { IInvoiceSimple } from '../models/InvoiceSimple';
import request from '../utils/request';

export const getSellers = async () => {
  const response: any = await request({
    url: 'sellers/',
    method: 'get',
  });
  return response.data;
};

export function createInvoice(data: IInvoiceSimple) {
  return request({
    url: 'invoices',
    method: 'post',
    data,
  });
}
