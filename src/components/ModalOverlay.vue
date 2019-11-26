<template>
  <MountingPortal
    v-if="isOpen"
    :mountTo="rootBodyElementName"
    data-breach-modal-wrapper
    append
    slim
    data-dom-id="mounting portal"
  >
    <slot />
  </MountingPortal>
</template>

<script lang="ts">
import {
  reactive,
  computed,
  createComponent,
  onMounted,
  ref
} from "@vue/composition-api";
import { MountingPortal } from "portal-vue";
// @ts-ignore
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
      context.root.$el.ownerDocument!.body.nodeName
    );
    return {
      rootBodyElementName
    };
  }
});
</script>
