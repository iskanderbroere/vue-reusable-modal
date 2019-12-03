<template>
  <ModalOverlay :is-open="isOpen" @dismiss="onDismiss">
    <ModalContent
      v-bind="$attrs"
      v-on="$listeners"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
    >
      <slot />
    </ModalContent>
  </ModalOverlay>
</template>

<script>
import { IS_DEV } from "../utils/index.ts";
import ModalOverlay from "./ModalOverlay.vue";
import ModalContent from "./ModalContent.vue";

function checkAriaLabels(props) {
  const details =
    "\nSee https://www.w3.org/TR/wai-aria/#ariaLabel for details.";
  if (!props["ariaLabel"] && !props["ariaLabelledBy"]) {
    // eslint-disable-next-line no-console
    console.error(
      `A modal/dialog must have either an \`ariaLabel\` or \`ariaLabelledBy\` prop.
      ${details}`
    );
  }
  if (props["ariaLabel"] && props["ariaLabelledBy"]) {
    // eslint-disable-next-line no-console
    console.error(
      "You provided both `ariaLabel` and `ariaLabelledBy` props to a modal/dialog. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `ariaLabelledBy` prop into modal/dialog. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `ariaLabel` prop, which will be used as an `ariaLabel` on the HTML tag." +
        details
    );
  }
}

export default {
  name: "Modal",
  inheritAttrs: false,
  components: {
    ModalOverlay,
    ModalContent
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    ariaLabel: {
      type: String
    },
    ariaLabelledBy: {
      type: String
    }
  },
  mounted() {
    if (IS_DEV) {
      checkAriaLabels(this.$props);
    }
  },
  methods: {
    onDismiss(event) {
      this.$emit("dismiss", event);
    }
  }
};
</script>
