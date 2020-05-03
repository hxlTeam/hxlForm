<template>
  <div class="hello">
    <hxl-form :model="model" :rules="rules" ref="hxlForm">
      <hxl-form-item label="用户名" prop="username">
        <hxl-input type="text" v-model="model.username"></hxl-input>
      </hxl-form-item>
      <hxl-form-item label="密码" prop="password">
        <hxl-input type="text" v-model="model.password"></hxl-input>
      </hxl-form-item>
      <hxl-form-item>
        <button @click="submitForm('hxlForm')">提交</button>
      </hxl-form-item>
    </hxl-form>
  </div>
</template>

<script>
import HxlInput from "./HxlInput";
import HxlFormItem from "./HxlFormItem";
import HxlForm from "./HxlForm";
export default {
  name: "FormTest",
  components: { HxlInput, HxlFormItem, HxlForm },
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules:{
        username:[{required:true,mssaage:'请输入用户名'}],
        password:[{required:true,mssaage:'请输入密码'}],
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid=>{
        if(valid){
          alert('请求登录')
        }
        else{
          alert('校验失败')
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
</style>
