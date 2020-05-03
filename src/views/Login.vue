<template>
  <div>
      
    <h2>用户登录</h2>
    <button @click="onLogin">登录</button>
  </div>

</template>

<script>
export default {
    methods: {
        onLogin() {
            // 模拟登录成功
            window.isLogin = true;
            // 获取查询参数
            const {redirect = '/'} = this.$route.query;
            console.log(redirect);
            this.$router.push(redirect);
        }
    }
}
</script>

<style>

</style>