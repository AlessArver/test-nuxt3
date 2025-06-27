<template>
  <component
    :is="Tag"
    :class="[$style[`bold_${bold}`], $style[variant], className]"
    v-bind="passedProps"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, type FunctionalComponent, type Component } from 'vue';

type HtmlTagType = keyof HTMLElementTagNameMap;

export enum TypographyVariant {
  title = 'title',
  subtitle = 'subtitle',
  body = 'body',
  caption = 'caption',
  label = 'label',
  link = 'link',
  button = 'button',
}

export type TypographyWeight = 500 | 600 | 700;

const tagMap: Record<TypographyVariant, HtmlTagType> = {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
  caption: 'span',
  label: 'label',
  link: 'a',
  button: 'button',
};

export default defineComponent({
  name: 'Typography',
  props: {
    variant: {
      type: String as () => TypographyVariant,
      default: TypographyVariant.body,
      validator: (value: string) => value in tagMap,
    },
    as: {
      type: String as () => HtmlTagType | Component | FunctionalComponent,
      default: undefined,
    },
    bold: {
      type: Number as () => TypographyWeight,
      default: 500,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup({ as, bold, className, variant }, { attrs }) {
    const Tag = computed(() => as || tagMap[variant as TypographyVariant]);

    return { Tag, bold, className, passedProps: attrs };
  },
});
</script>

<style lang="scss" module src="./index.module.scss" />
