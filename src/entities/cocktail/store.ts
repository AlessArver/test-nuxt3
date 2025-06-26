import { defineStore } from 'pinia';
import { fetchCocktails } from './api';
import type { CocktailCodeType, ICocktaislUI } from './types';

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({
    cocktails: {} as Record<CocktailCodeType, ICocktaislUI>,
  }),
  getters: {
    getCocktails: (state) => (code: CocktailCodeType) =>
      state.cocktails[code] ?? { items: [], loading: false, error: null },
  },
  actions: {
    async fetchCocktails(cocktailCode: string) {
      if (
        this.cocktails[cocktailCode]?.items.length ||
        this.cocktails[cocktailCode]?.loading
      )
        return;

      this.cocktails[cocktailCode] = { items: [], loading: true, error: null };

      try {
        const response = await fetchCocktails(cocktailCode);
        this.cocktails[cocktailCode] = {
          items: response.drinks || [],
          loading: false,
          error: null,
        };
      } catch (err) {
        this.cocktails[cocktailCode] = {
          items: [],
          loading: true,
          error: err instanceof Error ? err.message : 'Unknown error',
        };
      }
    },
  },
});
