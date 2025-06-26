import type { COCKTAIL_CODES } from './constants';

type IngredientIndex =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

interface ICocktailBase {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsDE: string | null;
  strInstructionsES: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  'strInstructionsZH-HANS': string | null;
  'strInstructionsZH-HANT': string | null;
  strDrinkThumb: string;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

type IngredientMap = {
  [K in `strIngredient${IngredientIndex}`]: string | null;
};

type MeasureMap = {
  [K in `strMeasure${IngredientIndex}`]: string | null;
};

export interface ICocktail extends ICocktailBase, IngredientMap, MeasureMap {}

export interface ICocktaislUI {
  items: ICocktail[];
  loading: boolean;
  error: string | null;
}

export interface IFetchCocktailsResponse {
  drinks: ICocktail[];
}

export type CocktailCodeType = (typeof COCKTAIL_CODES)[number];
