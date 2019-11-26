<template>
  <ModalOverlay :is-open="isOpen">
    <ModalInner @dismiss="onDismiss">
      <ModalContent
        v-bind="$attrs"
        v-on="$listeners"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledBy"
      >
        <slot />
      </ModalContent>
    </ModalInner>
  </ModalOverlay>
</template>

<script lang="ts">
import { createComponent, onMounted } from "@vue/composition-api";
import ModalOverlay from "./ModalOverlay.vue";
import ModalContent from "./ModalContent.vue";
import ModalInner from "./ModalInner.vue";
import { PropOptions } from "vue";

function checkAriaLabels(props: any): void {
  const details =
    "\nSee https://www.w3.org/TR/wai-aria/#ariaLabel for details.";
  if (!props["ariaLabel"] && !props["ariaLabelledBy"]) {
    // eslint-disable-line no-console
    console.error(
      `A modal/dialog must have either an \`ariaLabel\` or \`ariaLabelledBy\` prop.
      ${details}`
    );
  }
  if (props["ariaLabel"] && props["ariaLabelledBy"]) {
    // eslint-disable-line no-console
    console.error(
      "You provided both `ariaLabel` and `ariaLabelledBy` props to a modal/dialog. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `ariaLabelledBy` prop into modal/dialog. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `ariaLabel` prop, which will be used as an `ariaLabel` on the HTML tag." +
        details
    );
  }
}

export default createComponent({
  inheritAttrs: false,
  components: {
    ModalOverlay,
    ModalContent,
    ModalInner
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    } as PropOptions<boolean>,
    ariaLabel: {
      type: String
    },
    ariaLabelledBy: {
      type: String
    }
    // initialFocusRef: {
    //   type: Object,
    //   default: () => {}
    // }
  },
  setup(props, context) {
    onMounted(() => {
      checkAriaLabels(props);
    });
    function onDismiss(event: Event) {
      context.emit("dismiss", event);
    }
    return {
      onDismiss
    };
  }
});
</script>
