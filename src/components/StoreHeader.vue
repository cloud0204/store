<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <a class="navbar-brand" href="#">cloud'<small>store</small></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="showMenu = !showMenu"
      >
        <span class="oi oi-menu"></span> Menu
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: showMenu }"
        id="ftco-nav"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/login" class="nav-link">login</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">Shop</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/manager" class="nav-link"
              >add item</router-link
            >
            <!-- <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">Favorite</a>
              <a class="dropdown-item" href="#">All Orders</a>
            </div> -->
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Admin Manage</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">Add item</a>
              <a class="dropdown-item" href="#">Add Category</a>
              <a class="dropdown-item" href="#">All Products</a>
            </div>
          </li> -->
          <li class="nav-item">
            <a @click="login" class="nav-link" v-if="$store.state.showLogin">Log in</a>
            <a @click="logout" class="nav-link" v-else>Log out</a>
          </li>
          <li class="nav-item cart">
            <a href="#" class="nav-link"
              ><font-awesome-icon icon="fa-solid fa-cart-shopping" /><span
                class="bag d-flex justify-content-center align-items-center"
                ><small>1</small></span
              ></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css");
#app {
  font-family: "Poppins", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #151111;
  font-size: 15px;
  line-height: 1.8;
  font-weight: 300;
  color: gray;
  background: url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_4.jpg.pagespeed.ic.jZaRfvTz2Z.webp)
    no-repeat fixed;
  background-size: cover;
}

#ftco-nav .nav-item .nav-link {
  color: white;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#ftco-nav .nav-item .nav-link.router-link-exact-active {
  text-decoration: none;
  color: #c49b63;
}
.nav-item:hover .dropdown-menu {
  display: block;
}
</style>
<script>
// import { apiUserLogout } from "@/api";
export default {
  data() {
    return {
      showMenu: false,
      // showLogin: false,
    };
  },
  mounted() {
    this.$store.dispatch("INIT_USER");
    this.IsShowLogin();
  },
  // methods: {
  //   showMenu(){
  //     let dom=document.getElementById("ftco-nav");
  // dom.setAttribute("class","show");
  //   }
  // },
  methods: {
    login() {
      if(localStorage.getItem("header-config")==null){
        this.$router.push('/login')
        return;
      }
      this.$store.dispatch("GetToken");
      this.$store.state.showLogin = !this.$store.state.showLogin;
    },
    async logout() {
      localStorage.removeItem("header-config");
      this.$store.commit("authorization", null);
      let requestMessage = {
        status: 200,
        message: "登出成功",
        data: {},
        show: true,
      };
      this.$store.state.requestMessage = requestMessage;
      this.$store.state.showLogin = !this.$store.state.showLogin;
    },
    IsShowLogin() {
      this.$store.state.showLogin = localStorage.getItem("header-config")==null?true:false;
    },
  },
};
</script>