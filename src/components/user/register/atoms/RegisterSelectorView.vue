<template>
  <select class="form-select user-register-fields-input">
    <option v-for="(item, index) in this.list" v-bind:key="index">
      {{item}}
    </option>
  </select>
</template>

<script>
export default {
  name: "RegisterSelectorView",
  props: {
    list: Array,
  }
}
</script>

<style scoped>
.user-register-fields-input {
  margin: 12px auto;
  width: 90%;
}
</style>
