<template>
  <div>
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "test"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    //   通知FormItem校验
      this.$parent.$emit('validate');
    },
    
  }
};
</script>

<style>
</style>