<template>
  <div
    role="dialog"
    aria-modal="true"
    data-modal-content
    tabIndex="-1"
    @click.stop
  >
    <slot />
  </div>
</template>

<script lang="ts">
// export an empty object to avoid TS errors when importing this component elsewhere
export default {};
</script>

<style>
[data-modal-content] {
  width: 50vw;
  margin: 10vh auto;
  background: white;
  padding: 2rem;
  outline: none;
}
</style>
