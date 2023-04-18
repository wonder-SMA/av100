import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { plugin as VueTippy, roundArrow } from 'vue-tippy';
import App from './App.vue';
import { router } from './router/router.js';

createApp(App)
  .use(VueTippy, {
    directive: 'tippy',
    defaultProps: {
      placement: 'bottom',
      theme: 'light',
      animation: 'shift-away',
      duration: 325,
      arrow: roundArrow,
    },
  })
  .use(router)
  .use(createPinia())
  .mount('#app');
