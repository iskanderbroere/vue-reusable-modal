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

<style>
[data-modal-content] {
  width: 50vw;
  margin: 10vh auto;
  background: white;
  padding: 2rem;
  outline: none;
}
</style>
