import { defineStore } from 'pinia';
import { Competitor, ICompetitor } from '../models/Competitor';
import { IGameState } from '../models/Game';
import { ISeller } from '../models/Seller';
import { usePixabayStore } from '../stores/pixabayStore';
import { useSellersStore } from './sellerStore';

export const useGameStore = defineStore('game', {
  state: () =>
    ({
      competitors: [],
      winner: null,
      hasError: '',
    } as IGameState),
  getters: {
    getWinner(state) {
      return state.winner;
    },
    getSortCompetitors(state) {
      const a = [...state.competitors];
      return a.sort((a, b) => a.point - b.point).reverse();
    },
  },
  actions: {
    setCompetitors(sellers: ISeller[]) {
      sellers.map((seller) => {
        const newCompetitor = new Competitor(seller);
        this.competitors.push(newCompetitor);
      });
    },
    getCompetitor(id: string): ICompetitor {
      const competitor = this.competitors.filter((competitor: ICompetitor) => competitor.id === id);
      return competitor[0];
    },
    setPointCompetitor(id: string, urlImage: string) {
      this.competitors = this.competitors.map((competitor) => {
        if (competitor.id === id) {
          if (competitor.imgs.includes(urlImage)) {
            this.hasError = 'esta imagen ya fue votada';
            return competitor;
          }
          competitor.point += 3;
          competitor.imgs.push(urlImage);
        }
        return competitor;
      });
      this.checkWinner();
    },
    checkWinner() {
      const isWinner = this.competitors.find((competitor) => competitor.point > 20);
      if (isWinner) {
        this.winner = isWinner;
        const sellersStore = useSellersStore();
        sellersStore.createInvoice();
      }
    },
    reset() {
      const pixabayStore = usePixabayStore();
      this.$reset();
      const sellersStore = useSellersStore();
      const activeSellers = sellersStore.activeSellers;
      this.setCompetitors(activeSellers);
      pixabayStore.reset();
    },
  },
});
