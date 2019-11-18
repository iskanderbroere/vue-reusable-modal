<template>
  <div v-show="isOpen">Hello there!</div>
</template>

<script lang="ts">
import { createComponent, ref } from "@vue/composition-api";

export default createComponent({
  setup() {
    const isOpen = ref(true);
    return { isOpen };
  }
});
</script>
