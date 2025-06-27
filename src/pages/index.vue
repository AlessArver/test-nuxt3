<template>
  <TypographyUI>
    <NuxtLink to="/cocktails/margarita">Перейти к Margarita</NuxtLink>
  </TypographyUI>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import TypographyUI from '~/shared/ui/TypographyUI/index.vue';

const router = useRouter();
router.replace('/cocktails/margarita');

defineOptions({
  name: 'HomePage',
});
</script>
