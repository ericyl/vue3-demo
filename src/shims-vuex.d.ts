import { Store } from "vuex";
import State from "./types/State";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

declare module "vuex" {
  export function useStore(key?: string): Store<State>;
}
