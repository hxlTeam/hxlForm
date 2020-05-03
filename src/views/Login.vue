<template>
  <div>
    <h2>用户登录</h2>
    <button @click="onLogin" :disabled="loading">{{loading?'登录中':'登录'}}</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions(["login"]),
    onLogin() {
      // 模拟登录成功
      // window.isLogin = true;

      // 提交mutations
      // this.$store.commit('login');

      // 派发actions
      this.loading = true;
      // this.$store.dispatch("login").then(isLogin => {
      this.login({username:'tom'}).then(isLogin => {
        this.loading = false;
        if (isLogin) {
          // 获取查询参数
          const { redirect = "/" } = this.$route.query;
          console.log(redirect);
          this.$router.push(redirect);
        }
      });
    }
  }
};
</script>

<style>
</style>