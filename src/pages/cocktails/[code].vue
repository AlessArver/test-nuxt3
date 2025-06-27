<template>
  <div :class="$style.wrapper">
    <MenuUI
      :is-open="openMenu"
      :items="navItems"
      :on-toggle="handleToggleMenu"
    />
    <div :class="$style.cocktails">
      <TypographyUI v-if="cocktails.loading">Загрузка...</TypographyUI>
      <TypographyUI v-else-if="cocktails?.error">
        {{ cocktails.error }}
      </TypographyUI>
      <TypographyUI v-else-if="!cocktails.items?.length"
        >Нет данных</TypographyUI
      >
      <CocktailDetails
        v-for="cocktail in cocktails.items"
        v-else
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useRoute } from 'vue-router';

import MenuUI from '~/shared/ui/MenuUI/index.vue';
import TypographyUI from '~/shared/ui/TypographyUI/index.vue';

import { COCKTAIL_CODES } from '~/entities/cocktail/constants';
import { useCocktailStore } from '~/entities/cocktail/store';
import type { CocktailCodeType } from '~/entities/cocktail/types';

import CocktailDetails from '~/widgets/CocktailDetails/index.vue';

const store = useCocktailStore();
const route = useRoute();
const openMenu = ref(false);

const cocktailCode = computed<CocktailCodeType>(
  () => (route.params.code as CocktailCodeType) || 'margarita'
);
const cocktails = computed(() => store.getCocktails(cocktailCode.value));

const navItems = COCKTAIL_CODES.map((item) => ({
  name: item,
  url: `/cocktails/${item}`,
}));

const handleToggleMenu = () => {
  openMenu.value = !openMenu.value;
};

onMounted(() => {
  store.fetchCocktails(cocktailCode.value);
});

defineOptions({
  name: 'CocktailsPage',
});
</script>

<style lang="scss" module>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  gap: 20px;
}

.cocktails {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (max-width: $breakpoint-md) {
  .wrapper {
    flex-direction: column;
    gap: 0;
  }
}
</style>
