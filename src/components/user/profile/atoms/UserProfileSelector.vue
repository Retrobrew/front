<template>
  <div class="field">
    <p>{{fieldName}}</p>
    <select class="form-select user-register-fields-input" :value="value">
      <option v-for="(item, index) in list" v-bind:key="index">
        {{item}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfileSelector",
  props: {
    fieldName: String,
    list: Array,
    value: String,
  }
})
export default class UserProfileSelector extends Vue {
}
</script>

<style scoped>
.field {
  margin: 16px 8px;
}
.field p {
  margin: 0;
  padding: 0;
}
</style>
