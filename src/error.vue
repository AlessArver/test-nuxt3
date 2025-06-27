<template>
  <div :class="$style.wrapper">
    <NuxtLayout name="404">
      <div>
        <TypographyUI class="text-4xl">Страница не найдена</TypographyUI>
        <TypographyUI>
          <NuxtLink to="/cocktails/margarita">На главную</NuxtLink>
        </TypographyUI>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import TypographyUI from '~/shared/ui/TypographyUI/index.vue';

defineOptions({
  name: 'ErrorPage',
});
</script>

<style lang="scss" module>
.wrapper {
  text-align: center;
  margin-top: 50px;
}
</style>
