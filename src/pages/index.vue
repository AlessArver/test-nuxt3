<template>
  <NuxtLink to="/cocktails/margarita">Перейти к Margarita</NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const router = useRouter();
    router.replace('/cocktails/margarita');
    return {};
  },
});
</script>
