import { createApp } from "vue";
import App from "./App.vue";
import AuthForm from "./components/AuthForm.vue";
import CreateAccount from "./components/CreateAccount.vue";

const app = createApp(App);
app.component("auth-form", AuthForm);
app.component("create-account", CreateAccount);

app.mount("#app");
