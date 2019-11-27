<template>
  <MountingPortal
    v-if="isOpen"
    :mountTo="rootBodyElementName"
    data-modal-wrapper
    append
    slim
    data-dom-id="mounting portal"
  >
    <slot />
  </MountingPortal>
</template>

<script lang="ts">
import { MountingPortal } from "portal-vue";

export default {
  components: {
    MountingPortal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      rootBodyElementName: this.$root.$el.ownerDocument!.body.nodeName
    };
  }
};
</script>
