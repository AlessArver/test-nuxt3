import { api } from '~/shared/api';

import type { IFetchCocktailsResponse } from './types';

export const fetchCocktails = async (cocktailCode: string) => {
  return await api.get<IFetchCocktailsResponse>(
    `${useRuntimeConfig().public.apiBase}search.php?s=${cocktailCode}`
  );
};
