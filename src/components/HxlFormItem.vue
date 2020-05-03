<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage" class="error">{{errorMessage}}</p>
  </div>
</template>

<script>
import Validator from "async-validator";
export default {
  inject: ["form"],
  props: ["label", "prop"],
  data() {
    return {
      errorMessage: ""
    };
  },
  created() {
    this.$on("validate", this.validate);
  },
  methods: {
    validate() {
      return new Promise(resolve => {
        // 校验规则制定
        const descriptor = { [this.prop]: this.form.rules[this.prop] };
        console.log(descriptor, "=======descriptor");
        //   创建校验器
        const validate = new Validator(descriptor);
        // 执行校验
        validate.validate(
          { [this.prop]: this.form.model[this.prop] },
          errors => {
            if (errors) {
              console.log(errors);
              this.errorMessage = errors[0].message;
              resolve(false);
            } else {
              this.errorMessage = "";
              resolve(true);
            }
          }
        );
      });
    }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>