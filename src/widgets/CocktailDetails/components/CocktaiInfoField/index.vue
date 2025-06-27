<template>
  <TypographyUI variant="body" :class="$style.wrapper">
    <strong>{{ label }}:</strong>
    {{ value }}
  </TypographyUI>
</template>

<script setup lang="ts">
import TypographyUI from '~/shared/ui/TypographyUI/index.vue';

const { label, value } = withDefaults(
  defineProps<{
    label: string;
    value?: string;
  }>(),
  { value: '' }
);

defineOptions({
  name: 'CocktaiInfoField',
});
</script>

<style lang="scss" module src="./index.scss" />
