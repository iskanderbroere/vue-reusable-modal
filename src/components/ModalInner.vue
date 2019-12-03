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

<script>
import { FocusTrap } from "focus-trap-vue";
// ISSUE: https://github.com/willmcpo/body-scroll-lock/issues/120
import {
  disableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock/lib/bodyScrollLock.es6";

export default {
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
    onEscapeKeyDown(event) {
      this.$emit("dismiss", event);
    },
    onClick(event) {
      if (this.mouseDownTarget === event.target) {
        this.$emit("dismiss", event);
      }
    },
    onMouseDown(event) {
      this.mouseDownTarget = event.target;
    }
  },
  mounted() {
    disableBodyScroll(this.$el);
  },
  destroyed() {
    clearAllBodyScrollLocks();
  }
};
</script>

