import { defineStore } from 'pinia';
import { StatusEnum } from '../enum/status';
import { ISeller } from '../models/Seller';
import { getSellers } from '../services/alegraService';

export const useSellersStore = defineStore('sellers', {
  state: () => ({ allSellers: [], activeSellers: [] }),
  getters: {
    getSellerActive: (state: any) => {
      return state.allSellers.filter((seller: ISeller) => seller.status === StatusEnum.active);
    },
  },
  actions: {
    addSellerPoints(points: number) {
      // todo add seller points
    },
    filterActiveSeller() {
      this.activeSellers = this.allSellers.filter(
        (seller: ISeller) => seller.status === StatusEnum.active
      );
    },
    async searchSellerFromApi() {
      this.allSellers = await getSellers();
      this.filterActiveSeller();
    },
  },
});
