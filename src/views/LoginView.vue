<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="username"
                        class="form-control form-control-user"
                        id="exampleInputusername"
                        aria-describedby="usernameHelp"
                        placeholder="Enter username Address..."
                        v-model="input.username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="input.password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="autoTypeCheck"
                          @change="autoType"
                        />
                        <label class="custom-control-label" for="autoTypeCheck"
                          >Auto type</label
                        >
                      </div>
                    </div>
                    <a
                      @click="login"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </a>
                    <hr />
                  </form>
                  <hr />
                  <!-- <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="register.html">Create an Account!</a>
                                    </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

console.log("rwiuhtfgi");
// const axios = require("axios");

export default {
  data() {
    return {
      gg: ["ifldujgoi"],
      input: {
        username: null,
        password: null,
      },
      isAutoType: false,
    };
  },
  methods: {
    autoType() {
      if (this.isAutoType) {
        this.input.username = null;
        this.input.password = null;
      } else {
        this.input.username = "aaa@yahoo.com.tw";
        this.input.password = "123456";
      }
      this.isAutoType = !this.isAutoType;
    },
    login() {
let user=this.input;
      this.$store.dispatch("GetToken",user);
            this.$store.state.showLogin = !this.$store.state.showLogin;
        this.$router.push('/shop')

    },
  },
  computed: mapState({
    kk: (state) => state.kk,
    // kkAlias: "kk",
    jj(state) {
      return state.kk * 10;
    },
    ggg() {
      return 90;
    },
  }),
};
</script>