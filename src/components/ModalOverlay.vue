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
import { createComponent, ref } from "@vue/composition-api";
import { MountingPortal } from "portal-vue";

export default createComponent({
  components: {
    MountingPortal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  setup(props, context) {
    const rootBodyElementName = ref<HTMLDivElement>(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      context.root.$el.ownerDocument!.body.nodeName
    );
    return {
      rootBodyElementName
    };
  }
});
</script>
