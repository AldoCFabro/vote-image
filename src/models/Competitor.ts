import { ISeller } from './Seller';

export interface ICompetitor extends ISeller {
  point: number;
  imgs: string[];
}

export class Competitor implements ICompetitor {
  id: string;
  name: string;
  identification: string;
  observations: string;
  imgs: string[];
  point: number;
  status: string;
  constructor(seller: ISeller) {
    this.id = seller.id;
    this.name = seller.name;
    this.identification = seller.identification;
    this.observations = seller.observations;
    this.status = seller.status;
    this.imgs = [];
    this.point = 0;
  }
}
