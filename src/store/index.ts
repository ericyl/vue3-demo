import { createStore } from "vuex";
import State from "@/types/State";
import * as module from "./modules/module";

export default createStore({
  state: { test: "" } as State,
  mutations: {},
  actions: {},
  modules: {
    module,
  },
});
