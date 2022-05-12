import { defineStore, storeToRefs } from 'pinia';
import { StatusEnum } from '../enum/status';
import { IItemsInvoice, InvoiceSimple } from '../models/InvoiceSimple';
import { ISeller } from '../models/Seller';
import { getSellers, createInvoice } from '../services/alegraService';
import { useGameStore } from './gameStore';

export const useSellersStore = defineStore('sellers', {
  state: () => ({ allSellers: [], activeSellers: [] }),
  getters: {
    getTotalSeller: (state: any) => {
      return state.activeSellers.length;
    },
  },
  actions: {
    filterActiveSeller() {
      this.activeSellers = this.allSellers.filter(
        (seller: ISeller) => seller.status === StatusEnum.active
      );
    },
    async getSellerFromApi() {
      this.allSellers = await getSellers();
      this.filterActiveSeller();
      const gameStore = useGameStore();
      gameStore.setCompetitors(this.activeSellers);
    },
    async createInvoice() {
      const GameStore = useGameStore();
      const invoice = new InvoiceSimple();
      const sellerId = GameStore.getWinner?.id;
      invoice.seller = sellerId;
      const itemInvoice: IItemsInvoice = {
        id: 1,
        price: 0,
        quantity: GameStore.getWinner?.point ? GameStore.getWinner?.point : 0,
      };
      invoice.items?.push(itemInvoice);
      console.log(invoice);
      const res = await createInvoice(invoice);
      console.log('response', res);
    },
  },
});
