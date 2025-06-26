<template>
  <div v-if="cocktail" :class="$style.wrapper">
    <Typography :variant="TypographyVariant.title" :class="$style.title">
      {{ cocktail.strDrink }}
    </Typography>
    <div :class="$style.content">
      <div :class="$style.contentInfo">
        <CocktaiInfoField label="Категория" :value="cocktail.strCategory" />
        <CocktaiInfoField label="Алкогольный" :value="cocktail.strAlcoholic" />
        <CocktaiInfoField label="Стакан" :value="cocktail.strGlass" />
        <CocktaiInfoField
          label="Инструкция"
          :value="cocktail.strInstructions"
        />
        <h3>Ингредиенты:</h3>
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient.ingredient }}: {{ ingredient.measure }}
          </li>
        </ul>
      </div>
      <div :class="$style.imgWrapper">
        <img :src="cocktail.strDrinkThumb" loading="lazy" alt="Cocktail" />
      </div>
    </div>
  </div>
  <div v-else>Нет данных</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Typography, {
  TypographyVariant,
} from '~/shared/ui/Typography/index.vue';
import CocktaiInfoField from './components/CocktaiInfoField/index.vue';
import { type ICocktail } from '~/entities/cocktail/types';

export default defineComponent({
  name: 'CocktailDetails',
  components: { Typography, CocktaiInfoField },
  props: {
    cocktail: { type: Object as () => ICocktail, required: true },
  },
  setup({ cocktail }) {
    const ingredients = computed(() => {
      const result: { measure: string; ingredient: string }[] = [];

      for (const key in cocktail) {
        if (key.startsWith('strIngredient')) {
          const index = key.replace('strIngredient', '');
          const ingredient = cocktail[key as keyof ICocktail];
          const measure = cocktail[`strMeasure${index}` as keyof ICocktail];

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

    return {
      ingredients,
      cocktail,
      TypographyVariant,
    };
  },
});
</script>

<style lang="scss" module src="./index.module.scss" />