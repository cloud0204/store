<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <img src="../assets/spring-boot.jpg" style="height: 200px;" alt="">

    <HelloWorld msg="Welcome to cloud's store"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
