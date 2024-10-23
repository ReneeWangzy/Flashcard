import { createApp } from 'vue';

import App from './App.vue';
import SvgIcon from '~virtual/svg-component';

const app = createApp(App);
app.component(SvgIcon.name || 'default-name', SvgIcon);
app.use(router);
app.mount('#app');
