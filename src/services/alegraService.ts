import { IInvoiceSimple } from '../models/InvoiceSimple';
import request from '../utils/request';

export const getSellers = async () => {
  const response: any = await request({
    url: 'sellers/',
    method: 'get',
  });
  return response.data;
};

export async function createInvoice(data: IInvoiceSimple) {
  const response: any = await request({
    url: 'invoices',
    method: 'post',
    data,
  });
  return response.data;
}
