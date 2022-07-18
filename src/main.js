import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faDog,
  faShoppingCart,
  faMap,
  faPhone,
  faPaperPlane,
  faCheck,
  faSearchPlus,
  faPlus,
  faMinus,
  faPen,
  faX
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faDog,
  faShoppingCart,
  faTwitter,
  faFacebook,
  faInstagram,
  faMap,
  faPhone,
  faPaperPlane,
  faCheck,
  faSearchPlus,
  faPlus,
  faMinus,
  faPen,
  faX
);




createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
