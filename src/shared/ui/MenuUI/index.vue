<template>
  <nav :class="[$style.menu, { [$style.menu_open]: isOpen }]">
    <button :class="$style.openButton" @click="onToggle">=</button>

    <ul :class="$style.menuItems">
      <li
        v-if="isOpen"
        :class="[$style.menuItem, $style.closeButton]"
        @click="onToggle"
      >
        +
      </li>
      <TypographyUI
        v-for="{ name, url } in items"
        :key="url"
        as="li"
        :class="[$style.menuItem, { [$style.active]: $route.path === url }]"
      >
        <NuxtLink :to="url">{{ name }}</NuxtLink>
      </TypographyUI>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import TypographyUI from '~/shared/ui/TypographyUI/index.vue';

interface MenuItem {
  name: string;
  url: string;
}

const props = defineProps<{
  items: MenuItem[];
  isOpen: boolean;
  onToggle: (event: MouseEvent) => void;
}>();

const isOpen = computed(() => props.isOpen);

defineOptions({
  name: 'MenuUI',
});
</script>

<style lang="scss" module src="./index.scss" />
