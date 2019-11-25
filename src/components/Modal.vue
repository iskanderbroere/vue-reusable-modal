<template>
  <ModalOverlay :is-open="isOpen">
    <ModalInner @dismiss="onDismiss">
      <ModalContent v-bind="$attrs" v-on="$listeners">
        <slot />
      </ModalContent>
    </ModalInner>
  </ModalOverlay>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import ModalOverlay from "./ModalOverlay.vue";
import ModalContent from "./ModalContent.vue";
import ModalInner from "./ModalInner.vue";
import { PropOptions } from "vue";

export default createComponent({
  inheritAttrs: false,
  components: {
    ModalOverlay,
    ModalContent,
    ModalInner
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    } as PropOptions<boolean>
    // initialFocusRef: {
    //   type: Object,
    //   default: () => {}
    // }
  },
  setup(props, context) {
    function onDismiss(event: Event) {
      context.emit("dismiss", event);
    }
    return {
      onDismiss
    };
  }
});
</script>
