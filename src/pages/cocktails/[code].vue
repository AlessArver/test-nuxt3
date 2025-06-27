<template>
  <div :class="$style.wrapper">
    <Menu :isOpen="openMenu" :items="navItems" :onToggle="handleToggleMenu" />
    <div :class="$style.cocktails">
      <div v-if="cocktails.loading">Загрузка...</div>
      <div v-else-if="cocktails?.error">{{ cocktails.error }}</div>
      <div v-else-if="!cocktails.items?.length">Нет данных</div>
      <CocktailDetails
        v-else
        v-for="cocktail in cocktails.items"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import Menu from '~/shared/ui/Menu/index.vue';
import CocktailDetails from '~/widgets/CocktailDetails/index.vue';
import { COCKTAIL_CODES } from '~/entities/cocktail/constants';
import { useCocktailStore } from '~/entities/cocktail/store';
import { type CocktailCodeType } from '~/entities/cocktail/types';

export default defineComponent({
  name: 'CocktailsPage',
  components: { Menu, CocktailDetails },

  async setup() {
    const store = useCocktailStore();
    const route = useRoute();
    const openMenu = ref(false);

    const cocktailCode = computed(
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

    return { navItems, cocktails, openMenu, handleToggleMenu };
  },
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
