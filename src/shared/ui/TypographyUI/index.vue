<template>
  <component
    :is="Tag"
    :class="[$style[`bold_${bold}`], $style[variant], className]"
    v-bind="passedProps"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component, FunctionalComponent } from 'vue';

type HtmlTagType = keyof HTMLElementTagNameMap;
export type TypographyVariant =
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'label'
  | 'link'
  | 'button';
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

const props = withDefaults(
  defineProps<{
    variant?: TypographyVariant;
    as?: HtmlTagType | Component | FunctionalComponent;
    bold?: TypographyWeight;
    className?: string;
  }>(),
  { variant: 'body', as: undefined, bold: 500, className: '' }
);

const Tag = computed(() => props.as || tagMap[props.variant]);
const passedProps = { ...useAttrs() };

defineOptions({
  name: 'TypographyUI',
});
</script>

<style lang="scss" module src="./index.module.scss" />
