<template>
  <FocusLock>
    <div
      v-scroll-lock="true"
      data-breach-modal-overlay
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
import { createComponent, ref } from "@vue/composition-api";
import FocusLock from "vue-focus-lock";

export default createComponent({
  components: {
    FocusLock
  },
  props: {
    allowPinchZoom: {
      type: Boolean,
      default: true
    }
  },
  setup(initProps, context) {
    const mouseDownTarget = ref<null | EventTarget>(null);
    // const overlayNode = ref(null);
    // const ref = useForkedRef(overlayNode, forwardedRef);

    // React.useEffect(() => createAriaHider(overlayNode.current), []);
    // const onActivation = () => {
    // if (initialFocusRef && initialFocusRef.current) {
    //   initialFocusRef.current.focus();
    // }
    // };
    function onEscapeKeyDown(event: Event) {
      context.emit("dismiss", event);
    }

    function onClick(event: Event) {
      if (mouseDownTarget.value === event.target) {
        context.emit("dismiss", event);
      }
    }

    function onMouseDown(event: Event) {
      mouseDownTarget.value = event.target;
    }
    return {
      // onActivation,
      onEscapeKeyDown,
      onClick,
      onMouseDown
    };
  }
});
</script>

<style>
[data-breach-modal-overlay] {
  background: hsla(0, 0%, 0%, 0.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}
</style>
