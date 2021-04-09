import { createStore } from "vuex";

interface payload {
  name: string;
  status: boolean;
}

export const store = createStore({
  state() {
    return {
      visibility: {
        startMenu: false,
      },
    };
  },
  mutations: {
    changeVisibility(state: any, payload: payload) {
      const { name, status } = payload;
      state.visibility[name] = status;
    },
  },
});
