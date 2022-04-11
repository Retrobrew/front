<template>
  <div class="field">
    <p>{{fieldName}}</p>
    <input class="form-control user-login-fields-input" :value="value"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfileField",
  props: {
    fieldName: String,
    value: String,
  }
})
export default class UserProfileField extends Vue {
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
