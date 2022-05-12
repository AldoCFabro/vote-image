import { defineStore } from 'pinia';
import { Competitor, ICompetitor } from '../models/Competitor';
import { IGameState } from '../models/Game';
import { ISeller } from '../models/Seller';

export const useGameStore = defineStore('game', {
  state: () => ({ competitors: [], showImagesCard: [], highScore: 0, hasError: '' } as IGameState),
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
        if (competitor.point > this.highScore) {
          this.highScore = competitor.point;
        }
        return competitor;
      });
      this.checkWinner();
    },
    checkWinner() {
      console.log('checkWinner');
    },
  },
});
