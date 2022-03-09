import { createStore, createLogger } from "vuex";
import user from "./modules/user.js";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  modules: {
    user,
  },
  plugins: debug ? [createLogger()] : [],
});

export default store;
