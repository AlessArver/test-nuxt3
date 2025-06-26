<template>
  <Typography :variant="TypographyVariant.body" :class="$style.wrapper">
    <strong>{{ label }}:</strong>
    {{ value }}
  </Typography>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Typography, {
  TypographyVariant,
} from '~/shared/ui/Typography/index.vue';

export default defineComponent({
  name: 'CocktaiInfoField',
  components: { Typography },
  props: {
    label: { type: String, required: true },
    value: { type: String },
  },
  setup(props) {
    return { ...props, TypographyVariant };
  },
});
</script>

<style lang="scss" module src="./index.scss" />
