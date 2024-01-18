import "@shoelace-style/shoelace/dist/themes/dark.css"
import "./assets/main.css"

import { createApp } from "vue"
import ShoelaceModelDirective from '@shoelace-style/vue-sl-model'
import App from "./App.vue"

import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path"

setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/")

const app = createApp(App)
app.use(ShoelaceModelDirective)
app.mount("#app")
