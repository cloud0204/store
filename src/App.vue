<template>
  <headercomponent />
  <messagecomponent />

  <router-view />
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css");
/* *{
  background: #151111 !important; 
} */
body{
  background: url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_4.jpg.pagespeed.ic.jZaRfvTz2Z.webp)
    no-repeat fixed;
  background-size: cover;
}
#app {
  /* width: 100vh; */
  /* height: 100vmax; */
  font-family: "Poppins", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #151111;
  font-size: 15px;
  line-height: 1.8;
  font-weight: 300;
  color: gray;
  /* background: url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_4.jpg.pagespeed.ic.jZaRfvTz2Z.webp)
    no-repeat fixed;
  background-size: cover; */
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
import headercomponent from "@/components/StoreHeader.vue";
import messagecomponent from "@/components/RequestMessage.vue";
export default {
  components: {
    headercomponent,
    messagecomponent
  },
};
</script>
