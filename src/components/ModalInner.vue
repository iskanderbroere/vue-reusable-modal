<template>
  <FocusTrap :active="isOpen">
    <div
      tabindex="-1"
      data-modal-overlay
      @mousedown="onMouseDown"
      @click.stop="onClick"
      @keydown.esc.stop="onEscapeKeyDown"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </div>
  </FocusTrap>
</template>

<script lang="ts">
import Vue from "vue";
import { FocusTrap } from "focus-trap-vue";
// ISSUE: https://github.com/willmcpo/body-scroll-lock/issues/120
import {
  disableBodyScroll,
  clearAllBodyScrollLocks
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
} from "body-scroll-lock/lib/bodyScrollLock.es6";

export default Vue.extend({
  components: {
    FocusTrap
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      mouseDownTarget: null
    };
  },
  methods: {
    onEscapeKeyDown(event: any) {
      this.$emit("dismiss", event);
    },
    onClick(event: any) {
      if (this.mouseDownTarget === event.target) {
        this.$emit("dismiss", event);
      }
    },
    onMouseDown(event: any) {
      this.mouseDownTarget = event.target;
    }
  },
  mounted() {
    disableBodyScroll(this.$el);
  },
  destroyed() {
    clearAllBodyScrollLocks();
  }
});
</script>
