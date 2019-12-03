<template>
  <Portal v-if="isOpen && isBrowser" data-modal-wrapper>
    <ModalInner :is-open="isOpen" v-bind="$attrs" v-on="$listeners">
      <slot />
    </ModalInner>
  </Portal>
</template>

<script>
import { Portal } from "@linusborg/vue-simple-portal";
import ModalInner from "./ModalInner.vue";

export default {
  inheritAttrs: false,
  components: {
    Portal,
    ModalInner
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
