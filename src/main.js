/*
 * @FilePath: /lesscode/src/main.js
 * @Description: 介绍文件的作用、文件的入参、出参
 */
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

const app = createApp(App)
app.use(router)
app.mount('#root')