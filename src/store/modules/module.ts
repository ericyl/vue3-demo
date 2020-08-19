import { Commit } from "vuex";
import Model from "@/types/Model";

export const namespaced = true;

export const state = { id: "test" } as Model;

export const actions = {
  setId({ commit }: { commit: Commit }, id: string) {
    commit("SET_ID", id);
  },
};

export const mutations = {
  SET_ID(state: Model, id = "") {
    state.id = id;
  },
};

export const getters = {
  id(state: Model) {
    return state.id || "";
  },
};
