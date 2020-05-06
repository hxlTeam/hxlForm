<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <svg-icon icon-class="home"></svg-icon>Home
      </router-link>|
      <router-link to="/about">
        <svg-icon icon-class="about"></svg-icon>About
      </router-link>|
      <router-link to="/login">
        <svg-icon icon-class="login"></svg-icon>Login
      </router-link>|
      <span>{{loginState}}</span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["isLogin"]),
    ...mapGetters(["loginState"])
  }
};
</script>

<style lang="less">
</style>
