<template>
  <div :class="$style.wrapper">
    <NuxtLayout name="404">
      <div>
        <Typography class="text-4xl">Страница не найдена</Typography>
        <Typography>
          <NuxtLink to="/cocktails/margarita">На главную</NuxtLink>
        </Typography>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import Typography from '~/shared/ui/Typography/index.vue';
</script>

<style lang="scss" module>
.wrapper {
  text-align: center;
  margin-top: 50px;
}
</style>
