import { defineStore } from 'pinia';
import { getImages } from '../services/pixabayService';
import { useAppStore } from './appStore';
import { useSellersStore } from './sellerStore';
import { useGameStore } from './gameStore';

export const usePixabayStore = defineStore('searchImg', {
  state: () => ({ images: [] } as any),
  getters: {
    hasImage(store) {
      return store.images.length > 0;
    },
    getImage(store) {
      const game = useGameStore();
      const response = store.images.map((image: any, index: number) => {
        const { webformatURL } = image;
        const { id, name } = game.competitors[index];
        return { id, name, webformatURL };
      });
      return response;
    },
  },
  actions: {
    async getImagesFromServer(searchQuery: string) {
      const appStore = useAppStore();
      const sellersStore = useSellersStore();
      appStore.setLoading();
      this.images = await getImages(searchQuery, sellersStore.getTotalSeller);
      appStore.setLoaded();
    },
    reset() {
      this.images = [];
    },
  },
});
