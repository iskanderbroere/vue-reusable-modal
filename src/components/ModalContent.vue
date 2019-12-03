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

<script>
export default {
  name: "ModalContent"
};
</script>
