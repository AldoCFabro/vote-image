import { defineStore } from 'pinia';
import { StatusEnum } from '../enum/status';
import { ISeller } from '../models/Seller';
import { getSellers } from '../services/alegraService';
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
  },
});
