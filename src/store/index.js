import { createStore } from "vuex";
import { apiUserLogin,apiUserInit } from "@/api";

const LS = {
  load() {
    // console.log(localStorage);
    return JSON.parse(localStorage.getItem("header-config"));
  },
  save(data) {
    localStorage.setItem("header-config", JSON.stringify({
      headers: {
        "ADMIN-Authorization": data,
      },
    }));
  },
};

export default createStore({
  state: {
    kk: 0,
    requestMessage: {
      status: 0,
      message: "",
      data: {},
      show: false,
    },
    authorization: null,
    showLogin: false,
  },
  getters: {
    config(state) {
      if(state.authorization==null)return;
      return {
        headers: {
          "ADMIN-Authorization": state.authorization,
        },
      };
    },
  },
  mutations: {
    authorization(state, data) {
      state.authorization = data;
    },
    set_user(state, {headers}) {
      state.authorization = headers["ADMIN-Authorization"];
    },
  },
  actions: {
    async GetToken({ commit },user) {
      let requestMessage = await apiUserLogin(user)
        .then((response) => {
          // handle success
          // console.log("apiItemAdd ok");
          console.log(response.data);
          let data = response.data.access_token;
          commit("authorization", data);
          LS.save(data);
          return {
            status: 200,
            message: "登入成功",
            data: {},
            show: true,
          };
        })
        .catch(function (error) {
          // handle error
          let { data, message, status } = error.response.data;

          return {
            status: status,
            message: message,
            data: data,
            show: true,
          };
        });
      this.state.requestMessage = requestMessage;
    },
    INIT_USER({ commit }) {
      apiUserInit();
      if(localStorage.getItem("header-config")==null)return;
      commit("set_user", LS.load());
    },
  },
  modules: {},
});
