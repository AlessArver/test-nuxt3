<template>
  <Typography>
    <NuxtLink to="/cocktails/margarita">Перейти к Margarita</NuxtLink>
  </Typography>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Typography from '~/shared/ui/Typography/index.vue';

export default defineComponent({
  name: 'HomePage',
  components: { Typography },
  setup() {
    const router = useRouter();
    router.replace('/cocktails/margarita');
    return {};
  },
});
</script>
