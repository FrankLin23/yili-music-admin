import {
  getToken,
  removeCurrentUser,
  removeToken,
  setCurrentUser,
  setToken,
} from "../../utils/auth.js";
import { login } from "../../api/user.js";

const state = () => ({
  nickname: "Bobby",
  token: getToken(),
  username: "",
  roles: [],
});

const getters = {
  nicknameFirstWord: (state) => {
    return state.nickname.slice(0, 1);
  },
};

const actions = {
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login(username, password)
        .then((response) => {
          const { data } = response;
          //console.log(data);
          console.log("123");
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  logout({ commit }) {
    commit("SET_TOKEN", "");
    commit("SET_CURRENT_USER", null);
    removeToken();
    removeCurrentUser();
  },
  fetchCurrentUser({ commit }) {
    return new Promise((resolve, reject) => {
      me()
        .then((currenUser) => {
          commit("SET_CURRENT_USER", currenUser);
          setCurrentUser(currenUser);
          resolve(currenUser);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_CURRENT_USER: (state, currentUser) => {
    state.currentUser = currentUser;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
