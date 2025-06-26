<template>
  <div :class="$style.wrapper">
    <NuxtLayout name="404">
      <div>
        <div class="text-4xl">Страница не найдена</div>
        <NuxtLink to="/cocktails/margarita">На главную</NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" module>
.wrapper {
  text-align: center;
  margin-top: 50px;
}
</style>
