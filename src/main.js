import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from "element-plus/es/locale/lang/zh-cn";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from "./router";

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(ElementPlus,{ locale: zhCn })
app.mount('#app')
