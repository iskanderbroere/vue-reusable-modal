<template>
  <Portal v-if="isOpen" data-modal-wrapper data-dom-id="portal">
    <slot />
  </Portal>
</template>

<script lang="ts">
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
  }
};
</script>
