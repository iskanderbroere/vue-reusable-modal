import Vue from "vue";
// import devtools from "@vue/devtools";
import VueCompositionApi from "@vue/composition-api";
// @ts-ignore
import VScrollLock from "v-scroll-lock";

Vue.use(VScrollLock);
Vue.use(VueCompositionApi);

// if (process.env.NODE_ENV === "development") {
//   devtools.connect();
// }

import Modal from "./components/Modal.vue";
import ModalOverlay from "./components/ModalOverlay.vue";

export { Modal, ModalOverlay };
