<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

const props = defineProps(['list']);
const emits = defineEmits(['inputValue']);
</script>

<template>
  <select class="form-select user-register-fields-input" @change='emits("inputValue", $event.target.value)'>
    <option v-for="(item, index) in props.list" v-bind:key="index">
      {{item.name}}
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
