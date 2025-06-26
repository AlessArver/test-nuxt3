<template>
  <component
    :is="Tag"
    :class="[$style[variant], className]"
    v-bind="passedProps"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, type Component } from 'vue';

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

const tagMap: Record<TypographyVariant, HtmlTagType> = {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
  caption: 'span',
  label: 'label',
  link: 'a',
  button: 'button',
};

export interface ITypographyProps {
  variant?: TypographyVariant;
  className?: string;
}

export default defineComponent({
  name: 'Typography',
  props: {
    variant: {
      type: String as () => TypographyVariant,
      default: TypographyVariant.body,
      validator: (value: string) => value in tagMap,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup({ className, variant }: ITypographyProps, { attrs }) {
    const Tag = computed(() => tagMap[variant as TypographyVariant]);

    return { Tag, className, passedProps: attrs };
  },
});
</script>

<style lang="scss" module src="./index.module.scss" />
