<template>
  <nav :class="[$style.menu, { [$style.menu_open]: isOpen }]">
    <button :class="$style.openButton" @click="onToggle">=</button>

    <ul :class="$style.menuItems">
      <li
        :class="[$style.menuItem, $style.closeButton]"
        @click="onToggle"
        v-if="isOpen"
      >
        +
      </li>
      <li
        v-for="{ name, url } in items"
        :key="url"
        :class="[$style.menuItem, { [$style.active]: $route.path === url }]"
      >
        <NuxtLink :to="url">{{ name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface MenuItem {
  name: string;
  url: string;
}

export default defineComponent({
  name: 'Menu',
  props: {
    items: {
      type: Array as () => MenuItem[],
      required: true,
      default: () => [],
    },
    isOpen: { type: Boolean, default: false },
    onToggle: { type: Function as PropType<(event: MouseEvent) => void> },
  },
  setup(props) {
    const isOpen = computed(() => props.isOpen);

    return { isOpen, onToggle: props.onToggle, items: props.items };
  },
});
</script>

<style lang="scss" module src="./index.scss" />
