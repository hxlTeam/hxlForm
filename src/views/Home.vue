<template>
  <div class="home">
    <form-test></form-test>
  </div>
</template>

<script>
// @ is an alias to /src
import FormTest from '@/components/FormTest.vue'

export default {
  name: 'Home',
  components: {
    FormTest
  }
}
</script>
