import { defineStore } from 'pinia';
import { Competitor, ICompetitor } from '../models/Competitor';
import { IGameState, IShowInfoCard } from '../models/Game';
import { ISeller } from '../models/Seller';
import { usePixabayStore } from './pixabayStore';

export const useGameStore = defineStore('game', {
  state: () => ({ competitors: [], showImagesCard: [] } as IGameState),
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
  },
});
