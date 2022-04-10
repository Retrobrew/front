<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['list']);
</script>

<template>
  <select class="form-select user-register-fields-input">
    <option v-for="(item, index) in props.list" v-bind:key="index">
      {{item}}
    </option>
  </select>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class RegisterSelectorView extends Vue {
}
</script>

<style scoped>
.user-register-fields-input {
  margin: 12px auto;
  width: 90%;
}
</style>
