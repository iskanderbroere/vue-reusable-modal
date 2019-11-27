<template>
  <FocusLock>
    <div
      v-scroll-lock="true"
      data-modal-overlay
      @mousedown="onMouseDown"
      @click.stop="onClick"
      @keydown.esc.stop="onEscapeKeyDown"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </div>
  </FocusLock>
</template>

<script lang="ts">
import FocusLock from "vue-focus-lock";

export default {
  components: {
    FocusLock
  },
  props: {
    allowPinchZoom: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mouseDownTarget: null as EventTarget | null
    };
  },
  methods: {
    onEscapeKeyDown(event: Event) {
      this.$emit("dismiss", event);
    },
    onClick(event: Event) {
      if (this.mouseDownTarget === event.target) {
        this.$emit("dismiss", event);
      }
    },
    onMouseDown(event: Event) {
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
