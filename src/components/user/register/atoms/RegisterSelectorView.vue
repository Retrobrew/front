<template>
  <select class="form-select user-register-fields-input">
    <option v-for="(item, index) in props.list" v-bind:key="index">
      {{item}}
    </option>
  </select>
</template>

<script lang="ts">
import {Vue} from "vue-class-component/dist/vue-class-component";
import {defineProps} from "vue";

export default class RegisterSelectorView extends Vue {

  private props = defineProps({
    list: Array,
  });
}
</script>

<style scoped>
.user-register-fields-input {
  margin: 12px auto;
  width: 90%;
}
</style>
