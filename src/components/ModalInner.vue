<template>
  <FocusTrap :active="isOpen">
    <div
      v-scroll-lock="true"
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
  }
};
</script>

<style>
[data-modal-overlay] {
  background: hsla(0, 0%, 0%, 0.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}
</style>
