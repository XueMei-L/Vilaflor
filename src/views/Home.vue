<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <login/>
    <about/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Login,
    About
  }
}
</script>