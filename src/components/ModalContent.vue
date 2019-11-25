<template>
  <FocusLock returnFocus>
    <div
      role="dialog"
      aria-modal="true"
      data-breach-modal-content
      tabIndex="-1"
      @click.stop
    >
      <slot />
    </div>
  </FocusLock>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
// @ts-ignore
import FocusLock from "vue-focus-lock";

export default createComponent({
  components: {
    FocusLock
  }
});
</script>

<style>
[data-breach-modal-content] {
  width: 50vw;
  margin: 10vh auto;
  background: white;
  padding: 2rem;
  outline: none;
}
</style>
