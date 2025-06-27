<template>
  <div v-if="cocktail" :class="$style.wrapper">
    <TypographyUI variant="title" :class="$style.title">
      {{ cocktail.strDrink }}
    </TypographyUI>
    <div :class="$style.content">
      <div :class="$style.contentInfo">
        <CocktaiInfoField label="Категория" :value="cocktail.strCategory" />
        <CocktaiInfoField label="Алкогольный" :value="cocktail.strAlcoholic" />
        <CocktaiInfoField label="Стакан" :value="cocktail.strGlass" />
        <CocktaiInfoField
          label="Инструкция"
          :value="cocktail.strInstructions"
        />
        <TypographyUI as="h3" :bold="700">Ингредиенты:</TypographyUI>
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient.ingredient }}: {{ ingredient.measure }}
          </li>
        </ul>
      </div>
      <div :class="$style.imgWrapper">
        <NuxtImg
          :src="cocktail.strDrinkThumb"
          loading="lazy"
          alt="Cocktail"
          format="webp"
          width="200"
          height="200"
          :class="$style.image"
        />
      </div>
    </div>
  </div>
  <TypographyUI v-else variant="body"> Нет данных </TypographyUI>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import TypographyUI from '~/shared/ui/TypographyUI/index.vue';

import type { ICocktail } from '~/entities/cocktail/types';

import CocktaiInfoField from './components/CocktaiInfoField/index.vue';

const props = defineProps<{ cocktail: ICocktail }>();

const ingredients = computed(() => {
  const result: { measure: string; ingredient: string }[] = [];

  for (const key in props.cocktail) {
    if (key.startsWith('strIngredient')) {
      const index = key.replace('strIngredient', '');
      const ingredient = props.cocktail[key as keyof ICocktail];
      const measure = props.cocktail[`strMeasure${index}` as keyof ICocktail];

      if (ingredient && ingredient.trim()) {
        result.push({
          ingredient: ingredient.trim(),
          measure: measure?.trim() || '—',
        });
      }
    }
  }

  return result;
});

defineOptions({
  name: 'CocktailDetails',
});
</script>

<style lang="scss" module src="./index.module.scss" />
