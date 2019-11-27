import Vue from "vue";
// import devtools from "@vue/devtools";
import VScrollLock from "v-scroll-lock";

Vue.use(VScrollLock);

// if (process.env.NODE_ENV === "development") {
//   devtools.connect();
// }

import Modal from "./components/Modal.vue";
import ModalOverlay from "./components/ModalOverlay.vue";
import ModalInner from "./components/ModalInner.vue";
import ModalContent from "./components/ModalContent.vue";

export { Modal, ModalOverlay, ModalInner, ModalContent };
