<template>
  <Portal v-if="isOpen && isBrowser" data-modal-wrapper data-dom-id="portal">
    <slot />
  </Portal>
</template>

<script>
import { Portal } from "@linusborg/vue-simple-portal";

export default {
  components: {
    Portal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  created() {
    this.isBrowser = typeof window !== "undefined";
  }
};
</script>
