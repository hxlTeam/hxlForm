<template>
  <div id="app">
    <div id=nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <span>{{loginState}}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(['isLogin']),
    ...mapGetters(['loginState'])
  }
}
</script>

<style lang="less">

</style>
